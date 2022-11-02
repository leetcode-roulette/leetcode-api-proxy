import { FC } from "react";
import { Problem } from "leetcode-roulette-api";

type problemProps = {
  problem?: Problem
}

const ProblemData: FC<problemProps> = ({ problem }: problemProps) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: problem?.description || "<p>No description to show.</p>",
        }}
      />
      {problem?.hints.length ? (
      <div>
        <p>
          <strong>Hints:</strong>
        </p>
        <ul>
          {problem.hints.map((hint) => {
            return <li>{hint}</li>;
          })}
        </ul>
      </div>
      ) : <></>}
    </>
  );
}

export default ProblemData;