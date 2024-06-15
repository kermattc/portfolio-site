import { useRef } from 'react';
import './App.css';

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Navbar from './components/navbar';


export default function App() {
  const home = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string): void => {
      switch (section) {
        case 'home':
          home.current?.scrollIntoView({ behavior: 'smooth'});
          break;
        case 'about':
          about.current?.scrollIntoView({ behavior: 'smooth'});
          break;
        case 'projects':
          projects.current?.scrollIntoView({ behavior: 'smooth'});
          break;
        case 'contact':
          contact.current?.scrollIntoView({ behavior: 'smooth'});
          break;
        
        default:
          break;
      }
  }

  return (
    <div className="App">

      <div className='main'>
        <Navbar scrollToSection={scrollToSection} testyMcTestTest='testy mc test test'/> {/* Note that functions need to be wrapped in {} */} 
      </div>

      <div className='content'>

        <div ref={home} className='home'>
            <Home/>
        </div>
        <div ref={about} className='about'>
          <About/>
        </div>
        <div ref={projects} className='projects'>
          <Projects/>
        </div>
        <div ref={contact} className='contact'>
          <Contact/>
        </div>
      </div>

    </div>
  );
}