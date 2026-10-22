import { Dumbbell, MapPin, Ruler, UserCheck } from 'lucide-react';
import { brand, images, whatsappMessages } from '../config/site';
import { WhatsAppButton } from './WhatsAppButton';

const services = [
  { icon: UserCheck, label: 'Treinamento presencial.' },
  { icon: Dumbbell, label: 'Orientação de musculação.' },
  { icon: Ruler, label: 'Avaliação da composição corporal.' },
];

export function InPersonSection() {
  return (
    <section id="presencial" className="section section--lavender" tabIndex={-1} aria-labelledby="inperson-title">
      <div className="container inperson">
        <div className="inperson__text">
          <p className="eyebrow">Atendimento presencial</p>
          <h2 id="inperson-title" className="section-title">Quer treinar comigo presencialmente?</h2>
          <p className="lead">
            Treine com orientação de perto, tire suas dúvidas e tenha acompanhamento profissional para executar 
            os exercícios com mais segurança e confiança. Tudo pensado para seus objetivos e suas necessidades.
          </p>
          <p className="inperson__place">
            <MapPin size={18} aria-hidden="true" /> {brand.cityFull}
          </p>
          <WhatsAppButton message={whatsappMessages.presencial} className="btn btn--primary">
            Quero treinar com você!
          </WhatsAppButton>
        </div>

        <div className="inperson__side">
        {images.inperson && (
          <figure className="photo photo--inperson">
            <img
              src={images.inperson}
              alt={images.inpersonAlt}
              width={images.inpersonWidth}
              height={images.inpersonHeight}
              loading="lazy"
            />
          </figure>
        )}
        <ul className="inperson__services">
          {services.map(({ icon: Icon, label }) => (
            <li key={label}>
              <span aria-hidden="true"><Icon size={22} /></span>
              {label}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
}
