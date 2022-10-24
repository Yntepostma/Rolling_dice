import "./App.css";
import { Scoreboard, DiceResult } from "./components";

function App() {
  return (
    <div className="App">
      <h1>Rolling the dice</h1>
      <Scoreboard />
      <DiceResult />
    </div>
  );
}

export default App;
