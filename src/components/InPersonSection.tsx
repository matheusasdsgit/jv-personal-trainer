import { Dumbbell, MapPin, Ruler, UserCheck } from 'lucide-react';
import { brand, whatsappMessages } from '../config/site';
import { WhatsAppButton } from './WhatsAppButton';

const services = [
  { icon: UserCheck, label: 'Treinamento presencial' },
  { icon: Dumbbell, label: 'Orientação de musculação' },
  { icon: Ruler, label: 'Avaliação da composição corporal' },
];

export function InPersonSection() {
  return (
    <section id="presencial" className="section section--lavender" tabIndex={-1} aria-labelledby="inperson-title">
      <div className="container inperson">
        <div className="inperson__text">
          <p className="eyebrow">Atendimento presencial</p>
          <h2 id="inperson-title" className="section-title">Treinamento com orientação presencial</h2>
          <p className="lead">
            Para quem prefere orientação presencial, o acompanhamento permite trabalhar a execução dos
            exercícios, esclarecer dúvidas e organizar o treinamento de acordo com os objetivos
            individuais.
          </p>
          <p className="inperson__place">
            <MapPin size={18} aria-hidden="true" /> {brand.cityFull}
          </p>
          <WhatsAppButton message={whatsappMessages.presencial} className="btn btn--primary">
            Consultar disponibilidade pelo WhatsApp
          </WhatsAppButton>
        </div>

        <ul className="inperson__services">
          {services.map(({ icon: Icon, label }) => (
            <li key={label}>
              <span aria-hidden="true"><Icon size={22} /></span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
