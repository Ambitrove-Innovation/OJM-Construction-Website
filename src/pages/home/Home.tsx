import Hero from '../../components/Hero';
import About from '../../components/About';
import Services from '../../components/Services';
import Projects from '../../components/Projects';
import Reviews from '../../components/Reviews';
import FAQ from '../../components/FAQ';
import CTA from '../../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Reviews />
      <FAQ />
      <CTA />
    </>
  );
}
