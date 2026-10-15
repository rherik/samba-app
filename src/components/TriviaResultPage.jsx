export default function TriviaResultPage({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);
  const message = percentage >= 80
    ? 'Você tem o samba no pé e na memória!'
    : 'Que tal ouvir mais um samba e tentar de novo?';

  return (
    <main className="trivia-page">
      <section className="result-card">
        <span className="result-card__icon">♫</span>
        <p className="eyebrow">Resultado final</p>
        <h1>{message}</h1>
        <div className="result-card__score"><strong>{score}</strong><span>/ {total}</span></div>
        <p>Você acertou {percentage}% das perguntas.</p>
        <button type="button" className="button button--primary" onClick={onRestart}>Jogar novamente <span>↻</span></button>
      </section>
    </main>
  );
}