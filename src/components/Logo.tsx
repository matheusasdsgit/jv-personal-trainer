import { brand, images } from '../config/site';

interface LogoProps {
  /** 'onDark' = logo para fundos escuros; 'onLight' = para fundos claros */
  tone: 'onDark' | 'onLight';
  className?: string;
}

/**
 * IDENTIDADE VISUAL — ponto único para trocar a logo.
 * 1. Coloque os arquivos oficiais em public/images/brand/
 * 2. Informe os caminhos em `images.logoLight` / `images.logoDark` (src/config/site.ts)
 * Header e Footer usam este componente, então nada mais precisa mudar.
 *
 * `images.logoMark` coloca o símbolo da marca no lugar do "JV" do quadrado roxo.
 */
export function Logo({ tone, className = '' }: LogoProps) {
  const src = tone === 'onDark' ? images.logoDark : images.logoLight;

  if (src) {
    return (
      <img
        className={`logo logo--image ${className}`}
        src={src}
        alt={`${brand.name} — ${brand.professional}`}
        height={44}
      />
    );
  }

  return (
    <span className={`logo logo--placeholder logo--${tone} ${className}`}>
      <span className="logo__mark" aria-hidden="true">
        {images.logoMark ? (
          <img
            src={images.logoMark}
            alt=""
            width={26}
            height={24}
            style={{ width: 26, height: 'auto' }}
          />
        ) : (
          'JV'
        )}
      </span>
      <span className="logo__text">
        <span className="logo__name">JV Treinamento Físico</span>
        <span className="logo__sub">João Victor Personal Trainer</span>
      </span>
    </span>
  );
}
