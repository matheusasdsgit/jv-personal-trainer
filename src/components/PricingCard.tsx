import { Check, Minus } from 'lucide-react';
import { formatBRL, type Plan } from '../config/site';
import { WhatsAppButton } from './WhatsAppButton';

export function PricingCard({ plan }: { plan: Plan }) {
  const titleId = `plano-${plan.id}`;
  return (
    <article
      className={`plan${plan.highlight ? ' plan--highlight' : ''}`}
      aria-labelledby={titleId}
    >
      <header className="plan__head">
        <h3 id={titleId} className="plan__name">{plan.name}</h3>
        <p className="plan__price">
          <span className="plan__amount">{formatBRL(plan.monthly)}</span>
          <span className="plan__per">/mês</span>
        </p>
        <p className="plan__quarter">
          Trimestral: <strong>{formatBRL(plan.quarterly)}</strong>
          <br />
          ou <strong>{formatBRL(plan.quarterlyCash)}</strong> à vista
        </p>
      </header>

      <ul className="plan__features">
        {plan.features.map((feature) => (
          <li
            key={feature.label}
            className={feature.included ? 'is-included' : 'is-excluded'}
          >
            <span className="plan__icon" aria-hidden="true">
              {feature.included ? <Check size={16} strokeWidth={3} /> : <Minus size={16} />}
            </span>
            <span>
              {feature.label}
              {!feature.included && <span className="sr-only"> (não incluído)</span>}
              {feature.included && feature.note && (
                <small className="plan__note">{feature.note}</small>
              )}
            </span>
          </li>
        ))}
      </ul>

      <WhatsAppButton
        message={plan.message}
        className={`btn btn--block ${plan.highlight ? 'btn--primary' : 'btn--outline'}`}
        ariaLabel={`Contratar plano ${plan.name} pelo WhatsApp`}
      >
        Contratar pelo WhatsApp
      </WhatsAppButton>
    </article>
  );
}
