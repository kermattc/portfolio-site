import { useRef, useEffect, useState } from 'react';
import './App.css';
import useInViewPort from './hooks/useOnScreen';
import { FaA, FaAws } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Theses from './components/theses';
import Experience from './components/experience';
import Navbar from './components/navbar';

import UseWindowDimensions from './hooks/getWindowDimensions';

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
  const aboutInViewPort = useInViewPort(about, { threshold: 0.2 });
  const projectInViewPort = useInViewPort(projects, { threshold: 0.2 });
  const thesesInViewPort = useInViewPort(theses, { threshold: 0.2 });
  const experienceInViewPort = useInViewPort(experience, { threshold: 0.2 });
  const contactInViewPort = useInViewPort(contact, { threshold: 0.2 });

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
    } else {
      setActiveSection('');
    }
  }, [aboutInViewPort, projectInViewPort, thesesInViewPort, experienceInViewPort, contactInViewPort])

  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(false);
  const [isScreenSmol, setIsScreenSmol] = useState<boolean>(false);

  const toggleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  };

  const { windowWidth } = UseWindowDimensions();

  useEffect(()=> {
    if (windowWidth > 805){
      setIsScreenSmol(false); 
      setIsNavbarVisible(true)
    } else {
      setIsScreenSmol(true);
      setIsNavbarVisible(false);
    }
 },[windowWidth])

  return (
    <>
     <div className="App">

        {
          isScreenSmol ?          

            <button 
              className="toggle-button"
              onClick={toggleNavbar}
            >
              <FaBars  className='barsIcon'/>
              </button> :         
          null
        } 
          {
            
            <div className={`main ${isNavbarVisible ? 'slide-in' : 'slide-out'}`}>
              <Navbar scrollToSection={scrollToSection} testyMcTestTest='testymctesttest' activeSection={activeSection} />
              <div className='awsContainer'>
                Powered by <FaAws className='awsIcon'/>
              </div>
          </div>
}

        <div className='content'>
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
    </>
  );
}