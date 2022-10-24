import { useState } from "react";

export const Scoreboard = () => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Player 1", score: 0, number: 0 },
    { id: 2, name: "Player 2", score: 0, number: 0 },
  ]);

  const getNumber = (id) => {
    const updatedScores = players.map((player) => {
      if (player.id === id) {
        const newNumber = Math.round(Math.random() * 6);
        return {
          ...player,
          number: newNumber,
        };
      } else {
        return player;
      }
    });
    console.log("new score", updatedScores);
    setPlayers(updatedScores);
  };

  const incrementScore = (id) => {
    const updatedScores = players.map((player) => {
      if (player.id === id) {
        return {
          ...player,
          score: player.score + 1,
        };
      } else {
        return player;
      }
    });
    console.log("new score", updatedScores);
    setPlayers(updatedScores);
  };

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
