import React, { useEffect, useRef } from "react";
import handleSubmit from "../../../../../scripts/noora-chat/handle-submit";
import SelectInput from "./SelectInput";
import TextInput from "./TextInput";

export default function MessageBox({ history, convoState }: any) {
  const inputBoxRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (
      (convoState.value.turn.startsWith("user-answer") &&
        history.value
          .slice(0, Math.min(history.value.length, 5))
          .filter((h: any) => !h.fromNoora).length > 0) ||
      convoState.value.turn.endsWith("-edit")
    ) {
      // don't autofocus on page load (especially for mobile)
      // hence the history check, but we want to autofocus if microphone used
      if (inputBoxRef.current) inputBoxRef.current.focus();
    }
  }, [convoState.value]);

  return (
    <form
      className="px-2 bg-white rounded-b-md py-2 border-gray-400 border-2"
      id="messageBox"
    >
      {convoState.value.turn.startsWith("user-select") ?
        <SelectInput convoState={convoState} history={history} options={convoState.value.turn.includes("end") ? (["Yes", "No"]) : (["Positive", "Neutral", "Negative"])} handleSubmit={handleSubmit} />
        : <TextInput convoState={convoState} inputBoxRef={inputBoxRef} handleSubmit={(e: any) => { handleSubmit(e, convoState, history) }} />}
    </form>
  );
}