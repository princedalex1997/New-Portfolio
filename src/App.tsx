import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import ProjectsGallery from './components/ProjectsGallery';
import TechCloud from './components/TechCloud';
import Contact from './components/Contact';
import About from './components/About';
import Skills from './components/Skills.jsx';
import Flexiapps from './components/Flexiapps.jsx';
import Connections from './components/Connections.jsx';
import { useInView } from 'framer-motion';



function App() {

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative bg-slate-950 w-full  selection:bg-primary/30 font-['Krona_One',sans-serif] ">
      {/* <main className="relative bg-yellow-400 w-full min-h-screen selection:bg-primary/30"> */}
      <section ref={ref}>
        <Hero />
      </section>
      {!isInView && (
        <Connections />
      )}

      <About />
      <Skills />
      <Flexiapps />
      <TechCloud />
      <ProjectsGallery />
      <Contact />
    </main>
  );
}

export default App;
