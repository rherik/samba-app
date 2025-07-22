
const TriviaResultPage = ({ score, total }) => {
    const percentage = (score / total) * 100;
    let message = '';
    let image = '';

    if (percentage >= 80) {
        message = 'Parabéns! Você foi muito bem e sabe tudo de samba!';
        image = '/images/samba-master.png'; // coloque uma imagem temática
    } else {
        message = 'Ops! Parece que você precisa assistir mais desfiles para virar um mestre do samba!';
        image = '/images/need-more-samba.png'; // coloque uma imagem temática
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <h1>Resultado do Quiz</h1>
            <img src={image} alt="Resultado" style={{ maxWidth: '300px', margin: '2rem auto' }} />
            <h2>{message}</h2>
            <p>
                Você acertou <strong>{score}</strong> de <strong>{total}</strong> perguntas.
            </p>
            <button onClick={() => window.location.reload()}>Tentar novamente</button>
        </div>
    );
};

export default TriviaResultPage;