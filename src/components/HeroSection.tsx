import {Dumbbell, Footprints, Ruler, Target } from 'lucide-react';
import { images } from '../config/site';

/**
 * HERO — área visual de substituição:
 * Informe `images.hero` em src/config/site.ts para exibir a foto real
 * (com sobreposição roxa automática). Enquanto estiver vazio, aparece
 * uma composição gráfica provisória feita só com a identidade da marca.
 */
export function HeroSection() {
  return (
    <section id="inicio" className="hero" tabIndex={-1} aria-labelledby="hero-title">
      <div className="hero__stripes" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">JV Treinamento Físico · João Pessoa</p>
          <h1 id="hero-title" className="hero__title">
            <span>Seu treino.</span>
            <span>Sua rotina.</span>
            <span className="hero__title-accent">Sua evolução.</span>
          </h1>
          <p className="hero__lead">
            Treinamento físico individualizado para quem quer evoluir com planejamento,
            acompanhamento profissional e um método que respeita sua realidade.
          </p>
          <div className="hero__actions">
            <a className="btn btn--light" href="#consultoria">
             Quero treinar do jeito certo! <span className="emoji-roxo">💪</span>
            </a>
          <a className="btn btn--outline-light" href="#curso">
  Quero correr meus primeiros 5 km <span className="emoji-branco">🏃‍♂️</span>
            </a>
          </div>
        </div>

        <div className="hero__visual">
          {images.hero ? (
            <div className="hero__photo">
              <img
                src={images.hero}
                alt={images.heroAlt}
                width={images.heroWidth}
                height={images.heroHeight}
                fetchPriority="high"
              />
              <div className="hero__photo-overlay" aria-hidden="true" />
            </div>
          ) : (
            <div className="hero__art" aria-hidden="true">
              <div className="hero__art-ring" />
              <div className="hero__art-slab hero__art-slab--a" />
              <div className="hero__art-slab hero__art-slab--b" />
              <ul className="hero__chips">
                <li><Dumbbell size={18} /> Musculação</li>
                <li><Footprints size={18} /> Corrida</li>
                <li><Target size={18} /> Preparação para TAF</li>
                <li><Ruler size={18} /> Avaliação corporal</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
