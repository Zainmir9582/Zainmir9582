import Navbar from '@/Components/Navbar' 
import Contact from '@/Components/Contact';
import About from '@/Components/About';
import Education from '@/Components/Education';
import Hero from '@/Components/Hero';
import Skills from '@/Components/Skills';
import Experience from '@/Components/Experience';
import Projects from '@/Components/Project';
import Contact_Link from '@/Components/Contact_Link'
export default function Home() {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact_Link/>
      <Contact />
    </div>
  );
}