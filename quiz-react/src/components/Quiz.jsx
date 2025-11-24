import { useState } from "react";
import Question from "./Question";
import { questions } from "../data/questions";

export default function Quiz({ onRestart }) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = questions[index];

  function handleSelect(id) {
    if (selected !== null) return; // evita múltiplos cliques
    setSelected(id);
    const correctId = current.answers.find((a) => a.correct).id;
    if (id === correctId) setScore((s) => s + 1);
  }

  function handleNext() {
    const next = index + 1;
    if (next < questions.length) {
      setIndex(next);
      setSelected(null);
    } else {
      setFinished(true);
    }
  }

  function handleTryAgain() {
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    if (onRestart) onRestart();
  }

  if (finished) {
    // Tela final - você pode personalizar com animação/HTML extra
    return (
      <div className="quiz">
        <h2>Você acertou {score} de {questions.length}!</h2>
        <div style={{ marginTop: 18 }}>
          <button className="btn" onClick={handleTryAgain}>Tentar Novamente</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz">
      <Question
        question={current.question}
        answers={current.answers}
        selected={selected}
        onSelect={handleSelect}
      />

      <button
        id="next-btn"
        style={{ display: selected ? "block" : "none" }}
        onClick={handleNext}
      >
        Próxima
      </button>
    </div>
  );
}
