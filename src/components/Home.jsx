import { useEffect, useState } from 'react';
import Sobre from './Sobre';
import { mockDatabase } from '../assets/dataEscolas';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      <section className="hero" id="home">
        <div className="hero__glow hero__glow--one" />
        <div className="hero__glow hero__glow--two" />
        <div className="hero__content">
          <p className="eyebrow">Carnaval, memória e paixão</p>
          <h1>O samba que faz o Rio pulsar.</h1>
          <p className="hero__text">
            Conheça as escolas, descubra suas histórias e teste seus conhecimentos sobre o maior espetáculo da Terra.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#escolas">Explorar escolas</a>
            <a className="button button--ghost" href="/trivia">Jogar trivia <span>→</span></a>
          </div>
        </div>
        <div className="hero__art" aria-hidden="true" style={{ transform: `translateY(${scrollY * 0.12}px)` }}>
          <div className="hero__disc" />
          <img src="/pandeiro.png" alt="" />
          <span className="hero__note hero__note--one">♪</span>
          <span className="hero__note hero__note--two">♫</span>
        </div>
      </section>

      <section className="schools-section" id="escolas">
        <div className="section-heading">
          <div>
            <p className="eyebrow">O coração da avenida</p>
            <h2>Escolas em destaque</h2>
          </div>
          <p>Uma pequena coleção para você começar a explorar a história do samba carioca.</p>
        </div>
        <div className="school-grid">
          {mockDatabase.map((escola) => (
            <article key={escola.id} className="school-card">
              <div className="school-card__image-wrap">
                <img src={escola.img} alt={`Bandeira da ${escola.nome}`} className="school-card__image" />
                <span className="school-card__badge">#{escola.id.padStart(2, '0')}</span>
              </div>
              <div className="school-card__body">
                <h3>{escola.nome}</h3>
                <div className="school-card__meta">
                  <span>Fundada em <strong>{escola.fundacao}</strong></span>
                  <span><strong>{escola.titulos}</strong> títulos</span>
                </div>
                <a href="/trivia" className="school-card__link">Conhecer no trivia <span>↗</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Sobre />
    </main>
  );
}