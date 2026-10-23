import { AtSign, Mail, MapPin, MessageCircle } from 'lucide-react';
import { brand, contact, navItems, whatsappLink, whatsappMessages } from '../config/site';
import { Logo } from './Logo';

// Ano calculado uma vez ao carregar o site (atualiza sozinho a cada novo acesso)
const currentYear = new Date().getFullYear();

export function Footer() {
  const year = currentYear;

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo tone="onDark" />
        </div>

        <nav aria-label="Links do rodapé" className="footer__col">
          <h2>Navegação</h2>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h2>Contato</h2>
          <ul>
            <li>
              <a href={whatsappLink(whatsappMessages.general)} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} aria-hidden="true" /> WhatsApp {contact.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={contact.instagramUrl} target="_blank" rel="noopener noreferrer">
                <AtSign size={16} aria-hidden="true" /> {contact.instagramHandle}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>
                <Mail size={16} aria-hidden="true" /> {contact.email}
              </a>
            </li>
            <li>
              <span>
                <MapPin size={16} aria-hidden="true" /> {brand.city}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {year} {brand.name}. Todos os direitos reservados.</p>
        <a href="#/privacidade">Aviso de privacidade</a>
      </div>
    </footer>
  );
}
