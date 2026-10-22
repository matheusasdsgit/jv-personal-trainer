import { ChevronDown } from 'lucide-react';
import { useId, useState } from 'react';

const faqs = [
  {
    q: 'A consultoria online é para iniciantes?',
    a: 'A proposta é oferecer treinamento individualizado conforme os objetivos e as necessidades de cada aluno. Converse com João Victor para avaliar a adequação da consultoria ao seu caso.',
  },
  {
    q: 'Como recebo meus treinos?',
    a: 'A consultoria utiliza um aplicativo com planilha de treinamento e vídeos explicativos dos exercícios.',
  },
  {
    q: 'Posso tirar dúvidas durante a consultoria?',
    a: 'Os planos incluem feedback e suporte de segunda a sexta-feira.',
  },
  {
    q: 'Qual é a diferença entre Bronze, Prata e Ouro?',
    a: 'Todos incluem treino individualizado, aplicativo com vídeos explicativos e suporte. O Prata adiciona uma visita presencial mensal. O Ouro inclui também a avaliação antropométrica pelo protocolo ISAK a cada três meses.',
  },
  {
    q: 'O curso Do Zero aos 5 KM tem mensalidade?',
    a: 'Não. O preço informado é de R$ 20,00 em pagamento único.',
  },
  {
    q: 'Como faço para contratar?',
    a: 'Entre em contato pelo WhatsApp para conhecer as opções, esclarecer dúvidas e verificar as condições de atendimento.',
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
