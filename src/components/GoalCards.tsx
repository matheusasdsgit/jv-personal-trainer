import { ArrowRight, Dumbbell, Footprints, MapPin } from 'lucide-react';
import { whatsappLink, whatsappMessages } from '../config/site';

const goals = [
  {
    icon: Dumbbell,
    title: 'Quero treinar musculação',
    text: 'Treinamento individualizado, planejamento e acompanhamento profissional de acordo com seus objetivos.',
    cta: 'Conhecer a consultoria',
    href: '#consultoria',
    external: false,
  },
  {
    icon: Footprints,
    title: 'Quero começar a correr',
    text: 'Uma proposta progressiva e organizada para quem deseja começar a correr e trabalhar rumo aos primeiros 5 km.',
    cta: 'Conhecer o curso',
    href: '#curso',
    external: false,
  },
  {
    icon: MapPin,
    title: 'Quero atendimento presencial',
    text: 'Conheça as possibilidades de treinamento presencial e consulte a disponibilidade em João Pessoa.',
    cta: 'Consultar atendimento',
    href: whatsappLink(whatsappMessages.presencial),
    external: true,
  },
] as const;

export function GoalCards() {
  return (
    <section id="objetivo" className="section section--white" tabIndex={-1} aria-labelledby="goals-title">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Por onde começar</p>
          <h2 id="goals-title" className="section-title">Escolha seu objetivo</h2>
        </header>

        <ol className="goals">
          {goals.map((goal, index) => {
            const Icon = goal.icon;
            return (
              <li key={goal.title} className="goal">
                <span className="goal__index" aria-hidden="true">0{index + 1}</span>
                <span className="goal__icon" aria-hidden="true"><Icon size={26} /></span>
                <div className="goal__body">
                  <h3>{goal.title}</h3>
                  <p>{goal.text}</p>
                </div>
                <a
                  className="goal__link"
                  href={goal.href}
                  {...(goal.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {goal.cta}
                  {goal.external && <span className="sr-only"> (abre o WhatsApp em nova aba)</span>}
                  <ArrowRight size={18} aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
