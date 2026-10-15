import { useState } from 'react';
import { data } from '../assets/dataTrivia';
import TriviaResultPage from './TriviaResultPage';

export default function Trivia() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const question = data[index];

  if (!question) {
    return <TriviaResultPage score={score} total={data.length} onRestart={() => { setIndex(0); setSelected(null); setScore(0); }} />;
  }

  const options = [1, 2, 3, 4, 5].map((number) => ({
    number,
    label: question[`option${number}`],
  }));

  const chooseAnswer = (number) => {
    if (selected !== null) return;
    setSelected(number);
    if (number === question.answer) setScore((current) => current + 1);
  };

  const nextQuestion = () => {
    if (selected === null) return;
    setIndex((current) => current + 1);
    setSelected(null);
  };

  const getOptionClass = (number) => {
    if (selected === null) return '';
    if (number === question.answer) return 'trivia-option--correct';
    if (number === selected) return 'trivia-option--wrong';
    return 'trivia-option--muted';
  };

  return (
    <main className="trivia-page">
      <section className="trivia-card" aria-labelledby="trivia-title">
        <div className="trivia-card__topline">
          <span className="eyebrow">Desafio do samba</span>
          <span className="trivia-score">{score} acertos</span>
        </div>
        <div className="trivia-progress" aria-label={`Questão ${index + 1} de ${data.length}`}>
          <span style={{ width: `${((index + 1) / data.length) * 100}%` }} />
        </div>
        <p className="trivia-count">Questão {index + 1} de {data.length}</p>
        <h1 id="trivia-title">{question.question}</h1>
        <div className="trivia-options">
          {options.map((option) => (
            <button
              type="button"
              key={option.number}
              className={`trivia-option ${getOptionClass(option.number)}`}
              onClick={() => chooseAnswer(option.number)}
            >
              <span className="trivia-option__number">{String.fromCharCode(64 + option.number)}</span>
              <span>{option.label}</span>
              {selected !== null && option.number === question.answer && <span>✓</span>}
              {selected === option.number && option.number !== question.answer && <span>×</span>}
            </button>
          ))}
        </div>
        <div className="trivia-card__footer">
          <p>{selected === null ? 'Escolha uma resposta para continuar.' : selected === question.answer ? 'Mandou bem! Resposta correta.' : 'Quase! A resposta certa está destacada.'}</p>
          <button type="button" className="button button--primary" disabled={selected === null} onClick={nextQuestion}>
            {index === data.length - 1 ? 'Ver resultado' : 'Próxima questão'} <span>→</span>
          </button>
        </div>
      </section>
    </main>
  );
}