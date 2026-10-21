import { ArrowUpRight, Check } from 'lucide-react';
import { course, formatBRL, images, links } from '../config/site';

const benefits = [
  'Plano de treinamento estruturado',
  'Treinos explicados passo a passo',
  'Progressão gradual da corrida',
  'Organização semanal dos treinos',
  'Foco na preparação para os primeiros 5 km',
  'Acesso ao material pelo celular',
];

export function RunningCourseSection() {
  return (
    <section id="curso" className="section section--course" tabIndex={-1} aria-labelledby="course-title">
      <div className="course__stripes" aria-hidden="true" />
      <div className="container course">
        <div className="course__main">
          <p className="eyebrow eyebrow--light">Curso digital · {course.name}</p>
          <h2 id="course-title" className="course__title">
            Mesmo que você nunca tenha conseguido correr antes.
          </h2>
          <p className="course__lead">
            Um programa progressivo para quem deseja começar a correr com treinos organizados,
            alternando caminhada e corrida e avançando passo a passo rumo aos primeiros 5 km.
          </p>
          <ul className="course__list">
            {benefits.map((item) => (
              <li key={item}>
                <Check size={18} strokeWidth={3} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="course__side">
        {images.course && (
          <figure className="photo photo--course">
            <img
              src={images.course}
              alt={images.courseAlt}
              width={images.courseWidth}
              height={images.courseHeight}
              loading="lazy"
            />
          </figure>
        )}
        <aside className="course__buy" aria-label="Compra do curso">
          <p className="course__km" aria-hidden="true">5<span>KM</span></p>
          <p className="course__price-label">Pagamento único</p>
          <p className="course__price">{formatBRL(course.price)}</p>
          <p className="course__price-note">Sem assinatura recorrente. A compra é feita na Hotmart.</p>
          <a
            className="btn btn--accent btn--block"
            href={links.hotmartCourse}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero conhecer o curso
            <span className="sr-only"> (abre a página da Hotmart em nova aba)</span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </aside>
        </div>
      </div>
    </section>
  );
}
