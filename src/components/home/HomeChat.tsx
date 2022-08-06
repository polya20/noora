import React, { useState } from "react";
import NooraChat from "../interfaces/noora-chat/chat/NooraChat";
import Menu from "../interfaces/noora-chat/menu/Menu";
import Summary from "../interfaces/noora-chat/summary/Summary";

export default function HomeChat() {
  const [h, setH] = useState([]);
  const [cs, setCs] = useState({
    draft: "",
    turn: "user-answer",
    modules: [
      { title: "general", active: true },
      { title: "work", active: true },
    ],
    sentiments: [
      { title: "positive", active: true },
      { title: "neutral", active: false },
      { title: "negative", active: true },
    ],
    model: {
      name: "text-davinci-002", //"curie:ft-open-virtual-assistant-lab-stanford:dataset-v5-model-v4-2022-07-12-23-12-49",
      temperature: 0.9,
      frequencyPenalty: 0.6,
      presencePenalty: 0.5,
      goodReplyThreshold: 0.5,
    },
    progress: [],
    numProblems: 5,
  });

  const history = {
    value: h,
    setValue: setH,
  };

  const convoState = {
    value: cs,
    setValue: setCs,
  };

  // prop drilling beyond this point is intentional (for the re-usability of components)

  return (
    <div className="bg-gray-100 py-4" id="homeChat">
      <div className="py-4 container flex items-stretch flex-col md:flex-row justify-center md:space-x-2 space-y-2 md:space-y-0">
        <div className="basis-auto md:basis-7/12  lg:basis-3/4 w-full mx-auto">
          {convoState.value.turn == "summary" ? (
            <Summary history={history} convoState={convoState} />
          ) : (
            <NooraChat history={history} convoState={convoState} />
          )}
        </div>
        <div className="basis-auto md:basis-5/12 lg:basis-1/4 w-full mx-auto md:min-h-full">
          <Menu convoState={convoState} />
        </div>
      </div>
    </div>
  );
}
