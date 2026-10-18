import { Menu, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import { navItems, whatsappMessages } from '../config/site';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { WhatsAppButton } from './WhatsAppButton';

const MENU_ID = 'menu-mobile';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fecha o menu se a tela crescer para o layout de desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 960px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header className={`site-header${scrolled || open ? ' is-solid' : ''}`}>
      <div className="site-header__bar container">
        <a href="#inicio" className="site-header__brand" aria-label="JV Treinamento Físico — ir para o início" onClick={close}>
          <Logo tone="onDark" />
        </a>

        <nav className="site-nav" aria-label="Navegação principal">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <WhatsAppButton
            message={whatsappMessages.general}
            className="btn btn--whatsapp btn--sm site-header__cta"
          >
            WhatsApp
          </WhatsAppButton>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls={MENU_ID}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>
      <MobileMenu id={MENU_ID} open={open} onClose={close} />
    </header>
  );
}
