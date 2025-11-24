import { useState } from "react";
import StartScreen from "./components/StartScreen";
import Quiz from "./components/Quiz";
import "./index.css";

export default function App() {
  const [started, setStarted] = useState(false);

  return (
    <div className="app">
      <h1>Quiz</h1>

      {!started ? (
        <StartScreen onStart={() => setStarted(true)} />
      ) : (
        <Quiz onRestart={() => setStarted(false)} />
      )}
    </div>
  );
}
