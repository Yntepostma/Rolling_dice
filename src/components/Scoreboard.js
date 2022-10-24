import { useState } from "react";

export const Scoreboard = () => {
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  return (
    <div>
      <h1>This is scoreboard</h1>
      <div>
        <h1>Player1</h1>
        <p>score1</p>
      </div>
      <div>
        <h1>Player2</h1>
        <p>score2</p>
      </div>
    </div>
  );
};
