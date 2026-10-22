import { Award, BookOpen, GraduationCap, HeartPulse } from 'lucide-react';
import { images } from '../config/site';

const groups = [
  {
    icon: GraduationCap,
    title: 'Formação',
    items: [
      'Bacharelado em Educação Física pela UFPB.',
      'Pós-graduando em Biomecânica, Musculação e Reabilitação Musculoesquelética.',
      'Especialista em emagrecimento.',
      'Antropometrista ISAK nível 1.',
    ],
  },
  {
    icon: Award,
    title: 'Atuação',
    items: [
      'Treinamento de corrida e musculação.',
      'Preparação para TAF.',
      'Experiência com CrossFit.',
      'Atividades físicas para pessoas com deficiência.',
    ],
  },
  {
    icon: BookOpen,
    title: 'Pesquisa e cursos',
    items: [
      'Membro do LETFAS — Laboratório de Estudos de Treinamento Físico Aplicado à Saúde.',
      'Primeiros socorros e salvamento aquático.',
      'Avaliação e intervenção no idoso.',
      'HIIT, prescrição e respostas fisiológicas.',
    ],
  },
];

/**
 * Foto do profissional: informe `images.about` em src/config/site.ts
 * (arquivo em public/images/about/). Até lá, painel gráfico provisório.
 */
export function AboutSection() {
  return (
    <section id="sobre" className="section section--lavender" tabIndex={-1} aria-labelledby="about-title">
      <div className="container about">
        <div className="about__media">
          {images.about ? (
            <img
              src={images.about}
              alt={images.aboutAlt}
              width={images.aboutWidth}
              height={images.aboutHeight}
              loading="lazy"
            />
          ) : (
            <div className="about__placeholder" aria-hidden="true">
              <HeartPulse size={72} strokeWidth={1.25} />
            </div>
          )}
        </div>

        <div className="about__content">
          <p className="eyebrow">Sobre</p>
          <h2 id="about-title" className="section-title">Quem vai acompanhar você nessa jornada!</h2>
                  <p className="lead">
            Sou João Victor, profissional de Educação Física formado pela Universidade Federal da
            Paraíba (UFPB). Trabalho com musculação, corrida e preparação física, ajudando pessoas a
            treinarem do jeito certo, com planejamento, orientação e um treino pensado para seus
            objetivos.
          </p>
          <p className="lead">
            Acredito que treinar não precisa ser complicado. Meu objetivo é ajudar você a encontrar o
            melhor caminho para evoluir, respeitando sua rotina, seu nível de condicionamento e suas
            necessidades.
          </p>
          <p className="lead">
            Quero que você tenha mais confiança para treinar e consiga transformar a atividade física
            em parte da sua vida.
          </p>
          <div className="credentials">
            {groups.map(({ icon: Icon, title, items }) => (
              <section key={title} className="credentials__group" aria-label={title}>
                <h3>
                  <Icon size={18} aria-hidden="true" /> {title}
                </h3>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
