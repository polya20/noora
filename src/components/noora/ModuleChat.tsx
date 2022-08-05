import React, { useState, useEffect } from "react";
import NooraChat from "../interfaces/chat-interface/chat/NooraChat";
import Menu from "../interfaces/chat-interface/menu/Menu";
import Summary from "../interfaces/chat-interface/summary/Summary";

export default function ModuleChat({ modules }: ModuleChatProps) {
  const [h, setH] = useState([]);
  const [cs, setCs] = useState({
    draft: "",
    turn: "user-answer-start",
    modules: modules,
    sentiments: [
      { title: "positive", active: true },
      { title: "neutral", active: false },
      { title: "negative", active: true },
    ],
    model: {
      name: "text-davinci-002",
      temperature: 0.9,
      frequencyPenalty: 0.6,
      presencePenalty: 0.5,
      goodReplyThreshold: 0.5,
    },
    progress: [],
    currentAudio: {
      player: null,
      messagesIds: []
    },
    numProblems: 10,
  });

  const history = {
    value: h,
    setValue: setH,
  };

  const convoState = {
    value: cs,
    setValue: setCs,
  };

  useEffect(() => {
    if (modules)
      setCs((c: any) => {
        return { ...c, modules: modules };
      });
  }, [modules]);

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

type ModuleChatProps = {
  modules?: any[];
};
