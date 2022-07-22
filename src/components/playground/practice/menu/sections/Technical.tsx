import React from "react";

export default function Technical({ convoState }: any) {
  return (
    <div className="px-1 mt-1 text-gray-700">
      <span className="font-bold">Current turn: </span>
      {convoState.value.turn}
    </div>
  );
}
