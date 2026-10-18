import { ArrowLeft } from 'lucide-react';
import { brand, contact } from '../config/site';
import { Logo } from './Logo';

/**
 * Aviso de privacidade coerente com o funcionamento atual do site:
 * página estática, sem formulários, sem cookies próprios e sem rastreadores.
 * Recomenda-se revisão jurídica antes da publicação definitiva.
 */
export function PrivacyPage() {
  return (
    <div className="privacy">
      <header className="privacy__top">
        <div className="container privacy__bar">
          <a href="#inicio" aria-label="Voltar ao site"><Logo tone="onDark" /></a>
          <a className="btn btn--outline-light btn--sm" href="#inicio">
            <ArrowLeft size={16} aria-hidden="true" /> Voltar ao site
          </a>
        </div>
      </header>

      <main className="container privacy__content" id="conteudo">
        <h1>Aviso de privacidade</h1>
        <p>
          Este aviso explica, de forma simples, como o site da {brand.name} lida com informações
          pessoais.
        </p>

        <h2>O que este site coleta</h2>
        <p>
          O site é informativo. Ele não possui formulários, cadastro, login ou área do aluno e não
          coleta dados pessoais diretamente.
        </p>

        <h2>Cookies e rastreamento</h2>
        <p>
          Esta versão do site não utiliza cookies próprios, pixels de publicidade nem ferramentas de
          análise. Caso isso seja adicionado no futuro, este aviso será atualizado e, quando
          necessário, será solicitado o seu consentimento.
        </p>

        <h2>Links e serviços de terceiros</h2>
        <p>
          O site contém links para serviços externos, que possuem políticas próprias de privacidade:
        </p>
        <ul>
          <li>
            <strong>WhatsApp:</strong> ao clicar nos botões de contato, você é direcionado ao WhatsApp,
            e os dados que você enviar na conversa (como nome e telefone) passam a ser tratados por
            João Victor para responder ao seu contato e pelo próprio WhatsApp.
          </li>
          <li>
            <strong>Hotmart:</strong> a compra do curso Do Zero aos 5 KM é realizada na plataforma da
            Hotmart. Este site não processa pagamentos nem recebe dados de cartão.
          </li>
          <li>
            <strong>Instagram:</strong> o link leva ao perfil da marca na plataforma.
          </li>
        </ul>

        <h2>Seus direitos</h2>
        <p>
          Conforme a Lei Geral de Proteção de Dados (LGPD), você pode solicitar informações,
          correção ou exclusão dos dados que tenha compartilhado em conversas de atendimento.
        </p>

        <h2>Contato</h2>
        <p>
          Dúvidas sobre este aviso: <a href={`mailto:${contact.email}`}>{contact.email}</a>.
        </p>

        <p className="privacy__legal">
          Este texto é informativo e deve ser revisado por um profissional jurídico antes da
          publicação definitiva.
        </p>
      </main>
    </div>
  );
}
