import { Award, BookOpen, GraduationCap, HeartPulse } from 'lucide-react';
import { images } from '../config/site';

const groups = [
  {
    icon: GraduationCap,
    title: 'Formação',
    items: [
      'Bacharelado em Educação Física pela UFPB (concluído em 2022)',
      'Pós-graduando em Biomecânica, Musculação e Reabilitação Musculoesquelética (em andamento)',
      'Antropometrista ISAK nível 1',
    ],
  },
  {
    icon: Award,
    title: 'Atuação',
    items: [
      'Treinamento de corrida e musculação',
      'Preparação para TAF',
      'Experiência com CrossFit',
      'Atividades físicas para pessoas com deficiência',
    ],
  },
  {
    icon: BookOpen,
    title: 'Pesquisa e cursos',
    items: [
      'Membro do LETFAS — Laboratório de Estudos de Treinamento Físico Aplicado à Saúde',
      'Primeiros socorros e salvamento aquático',
      'Avaliação e intervenção no idoso',
      'HIIT, prescrição e respostas fisiológicas',
    ],
  },
];

/**
 * Foto do profissional: informe `images.about` em src/config/site.ts
 * (arquivo em public/images/about/). Até lá, painel gráfico provisório.
 */
export function AboutSection() {
  return (
    <section id="sobre" className="section section--white" tabIndex={-1} aria-labelledby="about-title">
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
          <h2 id="about-title" className="section-title">Conheça João Victor</h2>
          <p className="lead">
            João Victor é profissional de Educação Física formado pela Universidade Federal da Paraíba.
            Atua com treinamento de força, corrida e preparação física, buscando unir conhecimento
            técnico, planejamento e atenção às necessidades individuais de cada aluno.
          </p>
          <p>
            Sua proposta é tornar o treinamento mais acessível e organizado, ajudando cada pessoa a
            construir uma rotina de atividade física compatível com seus objetivos.
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
