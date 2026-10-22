import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';

const faqs = [
  {
    q: 'A consultoria online é para iniciantes?',
    a: 'Sim! A consultoria é voltada para quem deseja treinar com mais orientação, seja você iniciante ou já tenha experiência na musculação. O treino é planejado de acordo com seus objetivos, seu nível de condicionamento e sua rotina, para que você possa evoluir com mais confiança e segurança.',
  },
  {
    q: 'Como recebo meus treinos?',
    a: 'Você recebe seu planejamento de treino por meio de um aplicativo, com exercícios organizados, vídeos explicativos para ajudar na execução e orientações para acompanhar sua evolução. Assim, você sabe o que fazer em cada treino e pode consultar as informações sempre que precisar.',
  },
  {
    q: 'Posso tirar dúvidas durante a consultoria?',
    a: 'Sim, Você conta com suporte de segunda a sexta-feira para tirar dúvidas sobre os treinos e receber feedback sobre sua evolução. Assim, você tem orientação durante o processo e mais confiança para seguir seu planejamento de treinamento.',
  },
  {
    q: 'Qual é a diferença entre Bronze, Prata e Ouro?',
    a: 'Todos incluem treino individualizado, aplicativo com vídeos explicativos e suporte. O Prata adiciona uma visita presencial mensal. O Ouro inclui também a avaliação antropométrica pelo protocolo ISAK a cada três meses.',
  },
  {
    q: 'O curso Do Zero aos 5 KM tem mensalidade?',
    a: 'Sim! O curso funciona com pagamento recorrente mensal. Antes de assinar, confira o valor da mensalidade e as condições de cobrança na página oficial do curso na Hotmart.',
  },
  {
    q: 'Como faço para contratar?',
    a: 'É simples! Entre em contato comigo pelo WhatsApp, conte quais são seus objetivos e conheça as opções de treinamento que ofereço. Vou esclarecer suas dúvidas e ajudar você a escolher o plano mais adequado para sua rotina e suas necessidades.

Seu próximo nível começa com o primeiro passo!',
  },
];

/** Acordeão acessível: botões nativos com aria-expanded/aria-controls (mouse, toque e teclado). */
export function FAQSection() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section section--white" tabIndex={-1} aria-labelledby="faq-title">
      <div className="container faq">
        <header className="section-head">
          <p className="eyebrow">Dúvidas</p>
          <h2 id="faq-title" className="section-title">Perguntas frequentes</h2>
        </header>

        <div className="faq__list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-btn-${index}`;
            const panelId = `${baseId}-panel-${index}`;
            return (
              <div key={item.q} className={`faq__item${isOpen ? ' is-open' : ''}`}>
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.q}</span>
                    <ChevronDown size={20} aria-hidden="true" />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="faq__panel"
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
