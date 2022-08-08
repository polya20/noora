import { v4 as uuidv4 } from "uuid";
import { saveSessionResult } from "../user-info/session-results";
import noorasTurn from "./nooras-turn";

export default async function handleSubmit(e: any, convoState: any, history: any, message?: string) {
    e.preventDefault();

    // stop audio
    if (convoState.value.audio.player) {
        convoState.value.audio.player.pause()
        convoState.value.audio.player.close()
    }

    message = message ? message : convoState.value.draft.slice();
    if (!message) message = ""

    let userMsgId = uuidv4();

    history.setValue((h: any) => [
        ...h,
        { id: userMsgId, fromNoora: false, text: message, show: true },
    ]);
    convoState.setValue((cs: any) => ({ ...cs, draft: "" }));

    let m = message.trim().toLowerCase();

    if (convoState.value.turn.includes("start")) {
        if (m.includes("no") || m.includes("don")) {
            history.setValue((h: any) => [
                ...h,
                { id: uuidv4(), fromNoora: true, text: "Are you ready to begin?" },
            ]);
        } else {
            await noorasTurn(message, convoState, history, true);
        }
    } else if (
        convoState.value.progress.length < convoState.value.numProblems
    ) {
        await noorasTurn(message, convoState, history);
    } else {
        if (m == "yes") {
            convoState.setValue((cs: any) => ({
                ...cs,
                numProblems: cs.numProblems + 3,
            }));
            await noorasTurn(message, convoState, history, true);
        } else {
            handleSessionEnd(convoState)
        }
    }
};


function handleSessionEnd(convoState: any) {
    saveSessionResult(convoState.value.progress)
    
    // show summary
    convoState.setValue((cs: any) => ({ ...cs, turn: "summary" }));
}