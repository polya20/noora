import React, { useState, useEffect } from "react";
import InputForm from "./InputForm";
import Result from "./Result";

export default function NooraReplies() {
  const [query, updateQuery] = useState("");
  const [results, updateResults] = useState([
    {
      id: 1,
      statement: "Example statement",
      replies: [
        {
          statement: "Example statement",
          category: "Example category",
          reasoning: "Example reasoning",
          reply: '"Example reply"',
          rating: "Good answer.",
          explanation: "Example explanation",
        },
        {
          statement: "Example statement 2",
          category: "Example category ",
          reasoning: "Example reasoning 2",
          reply: '"Example reply 2"',
          rating: "Bad answer.",
          explanation: "Example explanation 2",
        },
      ],
    },
  ]);
  const [resultsQueue, updateResultsQueue] = useState<any[]>([]);

  useEffect(() => {
    // on queue change, update the right element
    resultsQueue.forEach((result) => {
      const newResults: any[] = results.map((r) => {
        if (r.id == result.id) return result;
        else return r;
      });

      updateResults(newResults);

      updateResultsQueue([]); // empty queue
    });
  }, [resultsQueue]);

  return (
    <div
      className="pt-16 bg-noora-secondary-main bg-cover bg-no-repeat bg-center overflow-hidden"
      id="nooraRepliesHero"
    >
      <div className="py-12">
        <div className="container text-center justify-center">
          <p className="inline leading-tight bg-gradient-to-r from-noora-primary-dark1 via-noora-primary-dark2 to-noora-secondary-bright bg-clip-text font-bold text-5xl tracking-tight text-transparent">
            Ask Noora
          </p>
          <h2 className="mt-3 text-2xl max-w-lg tracking-tight text-slate-800 mx-auto">
            Tell Noora anything, and she will give you some good and bad
            replies.
          </h2>

          <InputForm
            query={query}
            updateQuery={updateQuery}
            results={results}
            updateResults={updateResults}
            updateResultsQueue={updateResultsQueue}
          />
        </div>
      </div>
      <ul>
        {results
          .slice(0)
          .reverse()
          .map((result, idx) => (
            <li key={result.id}>
              <Result
                index={results.length - idx}
                statement={result.statement}
                replies={result.replies}
              />
            </li>
          ))}
      </ul>
    </div>
  );
}
