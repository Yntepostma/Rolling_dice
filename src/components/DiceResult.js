import { useState } from "react";

export const DiceResult = () => {
  const [number, setNumber] = useState(0);

  const getNumber = () => {
    const newNumber = Math.round(Math.random() * 6);
    setNumber(newNumber);
  };

  return (
    <div>
      <div>{number}</div>
      <button onClick={getNumber}>Roll</button>
    </div>
  );
};
