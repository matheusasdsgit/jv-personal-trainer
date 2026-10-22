import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ConsultingSection, PlansSection } from './components/ConsultingSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { GoalCards } from './components/GoalCards';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { InPersonSection } from './components/InPersonSection';
import { PrivacyPage } from './components/PrivacyPage';
import { RunningCourseSection } from './components/RunningCourseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FloatingWhatsApp } from './components/WhatsAppButton';
import { whatsappMessages } from './config/site';

const PRIVACY_HASH = '#/privacidade';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const isPrivacy = hash === PRIVACY_HASH;

  // Move o foco para a seção de destino (navegação por teclado) e volta ao topo na troca de página
  useEffect(() => {
    if (isPrivacy) {
      document.title = 'Aviso de privacidade | JV Treinamento Físico';
      window.scrollTo(0, 0);
      return;
    }
    document.title = 'JV Treinamento Físico | João Victor Personal Trainer em João Pessoa';
    const id = hash.replace('#', '');
    if (!id) return;
    const target = document.getElementById(id);
    if (target) {
      requestAnimationFrame(() => target.focus({ preventScroll: true }));
    }
  }, [hash, isPrivacy]);

  if (isPrivacy) return <PrivacyPage />;

  return (
    <>
      <a className="skip-link" href="#objetivo">Pular para o conteúdo</a>
      <Header />
           <main>
        <HeroSection />
        <GoalCards />
        <ConsultingSection />
        <RunningCourseSection />
        <InPersonSection />
        <PlansSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp message={whatsappMessages.general} />
    </>
  );
}
