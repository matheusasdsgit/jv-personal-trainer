import { CalendarCheck, ClipboardList, MessageSquareText, PlayCircle, Smartphone, Layers } from 'lucide-react';
import { images, plans } from '../config/site';
import { PricingCard } from './PricingCard';

const benefits = [
  { icon: Layers, text: 'Treinamento individualizado e periodizado.' },
  { icon: ClipboardList, text: 'Planejamento conforme os objetivos do aluno.' },
  { icon: Smartphone, text: 'Treinos disponibilizados por aplicativo.' },
  { icon: PlayCircle, text: 'Vídeos explicativos dos exercícios.' },
  { icon: MessageSquareText, text: 'Feedback e suporte de segunda a sexta-feira.' },
  { icon: CalendarCheck, text: 'Benefícios adicionais de acordo com o plano contratado.' },
];

export function ConsultingSection() {
  return (
      <section id="consultoria" className="section section--lavender" tabIndex={-1} aria-labelledby="consulting-title">
        <div className="container consulting">
          <div className="consulting__intro">
            <p className="eyebrow">Consultoria online · Musculação sem Medo</p>
            <h2 id="consulting-title" className="section-title">
              Treine com planejamento, orientação e acompanhamento profissional.
            </h2>
            <p className="lead">
              Um programa de treinamento individualizado, desenvolvido de acordo com os objetivos e as
              necessidades de cada aluno. Tenha acesso a treinos organizados, vídeos explicativos e
              acompanhamento para esclarecer dúvidas e orientar sua evolução.
            </p>
            {images.consulting && (
              <figure className="photo photo--consulting">
                <img
                  src={images.consulting}
                  alt={images.consultingAlt}
                  width={images.consultingWidth}
                  height={images.consultingHeight}
                  loading="lazy"
                />
              </figure>
            )}
          </div>

          <ul className="benefits">
            {benefits.map(({ icon: Icon, text }) => (
              <li key={text}>
                <span className="benefits__icon" aria-hidden="true"><Icon size={20} /></span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      );
}

export function PlansSection() {
  return (

      <section id="planos" className="section section--white" tabIndex={-1} aria-labelledby="plans-title">
        <div className="container">
          <header className="section-head section-head--center">
            <p className="eyebrow">Planos</p>
            <h2 id="plans-title" className="section-title">Escolha o plano ideal para você!</h2>
            <p className="section-sub">Treine com planejamento, orientação profissional e acompanhamento de acordo com o plano que combina com seus objetivos e sua rotina.</p>
          </header>

          <div className="plans">
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>
  );
}
