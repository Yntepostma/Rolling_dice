import "./App.css";
import { Scoreboard, DiceResult } from "./components";

function App() {
  return (
    <div className="App">
      <h1>Rolling the dice</h1>
      <Scoreboard />
      <div>
        <p>Player 1</p>
        <DiceResult />
      </div>
      <div>
        <p>Player 2</p>
        <DiceResult />
      </div>
    </div>
  );
}

export default App;
