import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Nav from '@/components/header/index';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <div className="relative max-w-screen overflow-x-hidden">
      <Nav />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
