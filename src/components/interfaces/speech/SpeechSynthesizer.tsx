import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";
import getSpeechSSMLStr from "../../../data/azure-speech/speech-ssml";
import { getTokenOrRefresh } from "../../../scripts/token_util";
import { messageToSpeechParams } from "../../../scripts/util";
const sdk = require("microsoft-cognitiveservices-speech-sdk");

export default function SpeechSynthesizer({
    className,
    convoState,
    audioRef,
    preText,
    text,
    postText,
    id,
    style,
    styleDegree
}: any) {
    const handler = () => {
        console.log("In speech handler");
        textToSpeech({ text: text, preText: preText, postText: postText, style: style, id: id, styleDegree: styleDegree, convoState: convoState, audioRef: audioRef });
    };

    let buttonColor = "text-gray-500"
    if (convoState.value.audio.player) {
        // audio is playing
        buttonColor = "text-gray-400"
        if (convoState.value.audio.messagesIds.includes(id)) {
            // THIS message's audio is playing
            buttonColor = "text-noora-primary"
        }
    }

    return (
        <button
            type="button"
            onClick={(e: any) => {
                e.preventDefault();
                handler();
            }}
            className={clsx("inline-block", buttonColor)}
            disabled={convoState.value.turn.includes("noora-reads")}
        >
            <FontAwesomeIcon
                icon={faVolumeUp}
                className={className}
            />
        </button>
    );
}

export async function textToSpeech(
    { text,
        preText,
        postText,
        style,
        id,
        styleDegree,
        history,
        convoState,
        audioRef,
        hidden }: any) {

    const setTurn = (str: string) => {
        convoState.setValue((cs: any) => ({
            ...cs,
            turn: str,
        }))
    }

    const tokenObj = await getTokenOrRefresh();
    const speechConfig = sdk.SpeechConfig.fromAuthorizationToken(
        tokenObj.authToken,
        tokenObj.region
    );
    var player = new sdk.SpeakerAudioDestination();
    const audioConfig = sdk.AudioConfig.fromSpeakerOutput(player);

    // The language of the voice that speaks.
    speechConfig.speechSynthesisVoiceName = "en-US-JennyNeural";

    // Create the speech synthesizer.
    let synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig);
    let originalTurn = convoState.value.turn.split("-noora-reads")[0]
    if (originalTurn.startsWith("user")) setTurn(originalTurn + "-noora-reads")

    const ssmlStr = getSpeechSSMLStr(text, preText, postText, style, styleDegree)

    // console.log(ssmlStr)

    player.onAudioStart = () => {
        convoState.setValue((cs: any) => ({
            ...cs, audio: { ...cs.audio, player: player, messagesIds: [id] }
        }))

        let currPlayer = audioRef.current.player
        if (currPlayer) {
            currPlayer.pause()
            currPlayer.close()
            convoState.setValue((cs: any) => ({
                ...cs, audio: { ...cs.audio, messagesIds: [] }
            }))
        }
    }

    if (hidden)
        player.onAudioEnd = () => {
            console.log("Audio end.")
            player.close()

            let currPlayer = audioRef.current.player
            // console.log(currPlayer.privId, player.privId)
            if (currPlayer)
                if (currPlayer.privId == player.privId) {
                    convoState.setValue((cs: any) => ({
                        ...cs, audio: { ...cs.audio, messagesIds: [] }
                    }))
                }


            if (!audioRef.current.shouldAutoPlay) {
                return;
            }

            hidden = hidden.slice(1)
            // show the next one and play its audio
            if (hidden.length == 0) {
                convoState.setValue((cs: any) => ({ ...cs, turn: convoState.value.turn.split("-noora-reads")[0], audio: { ...cs.audio, autoPlaying: false } }))
                return;
            }
            let item = hidden[0]

            history.setValue((h: any) => {
                return h.map((m: any) => {
                    if (m.id == item.id)
                        return { ...m, show: true }
                    else
                        return m
                })
            })

            const props = messageToSpeechParams(convoState, item, audioRef, history, hidden)
            textToSpeech(props)
        }
    else
        player.onAudioEnd = () => {
            console.log("Audio end.")
            player.close()

            let currPlayer = audioRef.current.player
            // console.log(currPlayer.privId, player.privId)
            if (currPlayer)
                if (currPlayer.privId == player.privId) {
                    // this is the current audio
                    setTurn(originalTurn)
                    convoState.setValue((cs: any) => ({
                        ...cs, audio: { ...cs.audio, messagesIds: [] }
                    }))
                }
        }

    // Start the synthesizer and wait for a result.
    await synthesizer.speakSsmlAsync(
        ssmlStr, // ssml.text
        (result: any) => {
            if (result.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
                console.log("Synthesis finished.");
            } else {
                console.error(
                    "Speech synthesis canceled, " +
                    result.errorDetails
                );
            }
            synthesizer.close();
            synthesizer = null;
        },
        (err: any) => {
            console.trace("err - " + err);
            synthesizer.close();
            synthesizer = null;
        }
    );
}