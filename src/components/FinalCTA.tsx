import { whatsappMessages } from '../config/site';
import { WhatsAppButton } from './WhatsAppButton';

export function FinalCTA() {
  return (
    <section id="contato" className="final-cta" tabIndex={-1} aria-labelledby="cta-title">
      <div className="final-cta__stripes" aria-hidden="true" />
      <div className="container final-cta__inner">
        <h2 id="cta-title">O próximo passo da sua evolução começa com uma escolha.</h2>
        <p>Conheça as opções de treinamento e encontre o caminho mais adequado aos seus objetivos.</p>
        <WhatsAppButton message={whatsappMessages.general} className="btn btn--whatsapp btn--lg">
          Conversar pelo WhatsApp
        </WhatsAppButton>
      </div>
    </section>
  );
}
