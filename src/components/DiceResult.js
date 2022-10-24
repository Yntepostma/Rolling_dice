import { useState } from "react";

export const RollDice = () => {
  const [number, setNumber] = useState(0);

  // const getNumber = () => {
  //   if (activate) {
  //     const newNumber = Math.round(Math.random() * 6);
  //     setNumber(newNumber);
  //     setActivate(false);
  //   }
  // };

  return (
    <div>
      <ul>
        <li>
          {name}: {number}
          <button onClick={() => getNumber(id)}>Roll</button>
        </li>
      </ul>
    </div>
  );
};
