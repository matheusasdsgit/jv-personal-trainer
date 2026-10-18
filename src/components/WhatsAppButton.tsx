import { MessageCircle } from 'lucide-react';
import type { ReactNode } from 'react';
import { whatsappLink } from '../config/site';

interface WhatsAppButtonProps {
  message: string;
  children: ReactNode;
  className?: string;
  /** Texto para leitores de tela, se o rótulo visível for curto */
  ariaLabel?: string;
}

/** Botão/link que abre o WhatsApp com mensagem pré-preenchida. */
export function WhatsAppButton({
  message,
  children,
  className = 'btn btn--whatsapp',
  ariaLabel,
}: WhatsAppButtonProps) {
  return (
    <a
      className={className}
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ? `${ariaLabel} (abre em nova aba)` : undefined}
    >
      <MessageCircle size={20} aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}

/** Botão flutuante discreto (visível apenas no celular). */
export function FloatingWhatsApp({ message }: { message: string }) {
  return (
    <a
      className="whatsapp-float"
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp (abre em nova aba)"
    >
      <MessageCircle size={26} aria-hidden="true" />
    </a>
  );
}
