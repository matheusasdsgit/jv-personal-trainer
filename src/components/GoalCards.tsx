import { ArrowRight, Dumbbell, Footprints, MapPin } from 'lucide-react';
import { whatsappLink, whatsappMessages } from '../config/site';

const goals = [
  {
    icon: Dumbbell,
    title: 'Quero treinar musculação',
    text: 'Tenha um treino feito para você, com planejamento e acompanhamento profissional para treinar com mais confiança e evoluir na direção dos seus objetivos.',
    cta: 'Quero começar agora!',
    href: '#consultoria',
    external: false,
  },
  {
    icon: Footprints,
    title: 'Quero começar a correr',
    text: 'Aprenda a organizar seus treinos com uma evolução gradual entre caminhada e corrida, sem precisar começar correndo longas distâncias.',
    cta: 'Quero sair do zero!',
    href: '#curso',
    external: false,
  },
  {
    icon: MapPin,
    title: 'Quero atendimento presencial',
    text: 'Tenha orientação de perto, tire suas dúvidas e conte com um profissional ao seu lado para treinar com mais confiança. Consulte locais e horários disponíveis em João Pessoa.',
    cta: 'Quero saber como funciona!',
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
