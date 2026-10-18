import { flags, testimonials } from '../config/site';

/**
 * Só aparece quando `flags.showTestimonials` é true E existem depoimentos reais
 * e autorizados em `testimonials` (src/config/site.ts). Nada fictício é publicado.
 */
export function TestimonialsSection() {
  if (!flags.showTestimonials || testimonials.length === 0) return null;

  return (
    <section id="depoimentos" className="section section--white" tabIndex={-1} aria-labelledby="testimonials-title">
      <div className="container">
        <header className="section-head section-head--center">
          <p className="eyebrow">Depoimentos</p>
          <h2 id="testimonials-title" className="section-title">Quem treina com João Victor</h2>
        </header>
        <div className="testimonials">
          {testimonials.map((item) => (
            <figure key={item.name} className="testimonial">
              {item.photo && <img src={item.photo} alt={`Foto de ${item.name}`} loading="lazy" width={72} height={72} />}
              <blockquote>{item.text}</blockquote>
              <figcaption>{item.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
