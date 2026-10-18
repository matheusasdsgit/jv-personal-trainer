import { useEffect, useRef } from 'react';
import { navItems, whatsappMessages } from '../config/site';
import { WhatsAppButton } from './WhatsAppButton';

interface MobileMenuProps {
  id: string;
  open: boolean;
  onClose: () => void;
}

/** Painel de navegação do celular: fecha com Esc, ao tocar em um link e bloqueia a rolagem do fundo. */
export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector<HTMLElement>('a')?.focus();

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <div
      id={id}
      ref={panelRef}
      className={`mobile-menu${open ? ' is-open' : ''}`}
      // `inert` evita foco em links ocultos quando fechado
      {...(open ? {} : { inert: true })}
      aria-hidden={!open}
    >
      <nav aria-label="Menu principal">
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={onClose}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <WhatsAppButton message={whatsappMessages.general} className="btn btn--whatsapp btn--block">
        Chamar no WhatsApp
      </WhatsAppButton>
    </div>
  );
}
