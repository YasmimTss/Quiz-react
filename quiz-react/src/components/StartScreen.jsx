export default function StartScreen({ onStart }) {
  return (
    <div id="start-screen">
      <p>Bem-vindo(a)! Pronto(a) para começar o quiz?</p>
      <button id="start-btn" className="btn" onClick={onStart}>
        Iniciar
      </button>
    </div>
  );
}
