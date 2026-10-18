import { CalendarCheck, ClipboardList, MessageSquareText, PlayCircle, Smartphone, Layers } from 'lucide-react';
import { plans } from '../config/site';
import { PricingCard } from './PricingCard';

const benefits = [
  { icon: Layers, text: 'Treinamento individualizado e periodizado' },
  { icon: ClipboardList, text: 'Planejamento conforme os objetivos do aluno' },
  { icon: Smartphone, text: 'Treinos disponibilizados por aplicativo' },
  { icon: PlayCircle, text: 'Vídeos explicativos dos exercícios' },
  { icon: MessageSquareText, text: 'Feedback e suporte de segunda a sexta-feira' },
  { icon: CalendarCheck, text: 'Benefícios adicionais de acordo com o plano contratado' },
];

export function ConsultingSection() {
  return (
    <>
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

      <section id="planos" className="section section--white" tabIndex={-1} aria-labelledby="plans-title">
        <div className="container">
          <header className="section-head section-head--center">
            <p className="eyebrow">Planos</p>
            <h2 id="plans-title" className="section-title">Escolha o plano da sua consultoria</h2>
            <p className="section-sub">Valores claros, sem surpresas. Compare os benefícios de cada plano.</p>
          </header>

          <div className="plans">
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
