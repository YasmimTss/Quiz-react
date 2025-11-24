export default function Question({ question, answers, selected, onSelect }) {
  const correct = answers.find((a) => a.correct);

  return (
    <>
      <h2 id="question">{question}</h2>
      <div id="answer-buttons" className="options">
        {answers.map((a) => {
          let clazz = "btn";
          if (selected !== null) {
            if (a.id === correct.id) clazz += " correct";
            else if (a.id === selected && a.id !== correct.id) clazz += " incorrect";
          }
          return (
            <button
              key={a.id}
              className={clazz}
              onClick={() => onSelect(a.id)}
              disabled={selected !== null}
              data-id={a.id}
            >
              {a.text}
            </button>
          );
        })}
      </div>
    </>
  );
}
