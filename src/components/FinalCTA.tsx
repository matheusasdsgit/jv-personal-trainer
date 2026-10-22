import { whatsappMessages } from '../config/site';
import { WhatsAppButton } from './WhatsAppButton';

export function FinalCTA() {
  return (
    <section id="contato" className="final-cta" tabIndex={-1} aria-labelledby="cta-title">
      <div className="final-cta__stripes" aria-hidden="true" />
      <div className="container final-cta__inner">
        <h2 id="cta-title">Vamos dar o próximo passo na sua evolução?</h2>
        <p>Conheça minhas opções de treinamento e descubra como posso ajudar você a alcançar seus objetivos, respeitando sua rotina e seu nível atual.</p>
        <WhatsAppButton message={whatsappMessages.general} className="btn btn--whatsapp btn--lg">
          Quero começar minha evolução!
        </WhatsAppButton>
      </div>
    </section>
  );
}
