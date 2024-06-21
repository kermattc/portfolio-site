import { useRef, useEffect, useState } from 'react';
import './App.css';
import useInViewPort from './components/useOnScreen';

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Theses from './components/theses';
import Experience from './components/experience';
import Navbar from './components/navbar';


export default function App() {
  const home = useRef<HTMLDivElement>(null);
  const about = useRef<HTMLDivElement>(null);
  const projects = useRef<HTMLDivElement>(null);
  const theses = useRef<HTMLDivElement>(null);
  const experience = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: string): void => {
    console.log('Scrolling to section: ', section)
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
        case 'theses':
          theses.current?.scrollIntoView({ behavior: 'smooth'});
          break;
        case 'experience':
          experience.current?.scrollIntoView({ behavior: 'smooth'});
          break;
        case 'contact':
          contact.current?.scrollIntoView({ behavior: 'smooth'});
          break;
        
        default:
          break;
      }
  }

  // const targetRef = useRef<HTMLDivElement>(null);
  const aboutInViewPort = useInViewPort(about, { threshold: 0.7 });
  const projectInViewPort = useInViewPort(projects, { threshold: 0.7 });
  const thesesInViewPort = useInViewPort(theses, { threshold: 0.7 });
  const experienceInViewPort = useInViewPort(experience, { threshold: 0.7 });
  const contactInViewPort = useInViewPort(contact, { threshold: 0.7 });

  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    if (aboutInViewPort) {
      setActiveSection('about');
    } else if (projectInViewPort) {
      setActiveSection('project');
    } else if (thesesInViewPort) {
      setActiveSection('theses');
    } else if (experienceInViewPort) {
      setActiveSection('experience');
    } else if (contactInViewPort) {
      setActiveSection('contact');
    }  else {
      setActiveSection('');
    }
  }, [aboutInViewPort, projectInViewPort, thesesInViewPort, experienceInViewPort, contactInViewPort])

  return (
    <div className="App">
      <div className='main'>
        <Navbar scrollToSection={scrollToSection} testyMcTestTest='testy mc test test' activeSection={activeSection}/> {/* Note that functions need to be wrapped in {} */} 
      </div>
      <div className='content'>

        {/* <div ref={home} className='home'>
            <Home/>
        </div> */}
        <div ref={about} className='about'>
          <About/>
        </div>
        <div ref={projects} className='projects'        
          >
          <Projects/>
        </div>
        <div ref={theses} className='theses'>
          <Theses/>
        </div>
        <div ref={experience} className='experience'>
          <Experience/>
        </div>
        <div ref={contact} className='contact'>
          <Contact/>
        </div>
      </div>

    </div>
  );
}