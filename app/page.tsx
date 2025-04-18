import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Nav from '@/components/header/index';

export default function Home() {
  return (
    <div className="relative">
      <Nav />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
