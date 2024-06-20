import './../App.css'

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsFillFileEarmarkPersonFill } from "react-icons/bs";


interface NavbarProps {
    scrollToSection: (section: string) => void;
    testyMcTestTest: string;
    activeSection: string;
}

// two ways of doing this. But just keep in mind to specify the props and their types. also for some reason people hate React.FC, might look into it later
// const Navbar: React.FC<NavbarProps> = ({ scrollToSection, testyMcTestTest }) => {
export const Navbar = ( {scrollToSection, testyMcTestTest, activeSection }: NavbarProps) => {

    function openInNewTab(link: string): void {
        window.open(link, "_blnk", "noreferrer");
    }

    function openResumeInNewTab(link: string): void {
        window.open(link, "_blank", "noreferrer");
    }

    return(
        <div className='sidebar'>
            <div className='navbar'>
                <h1>Matthew Chan</h1>
                <h2>MSc. Computer Science</h2>
                <ul>
                <li className={activeSection === 'about' ? 'link-viewed': 'link'} onClick={() => scrollToSection('about')}
                >
                    About
                </li>
                <li className={activeSection === 'project' ? 'link-viewed': 'link'} onClick={() => scrollToSection('projects')}>
                    Projects
                </li>
                <li className={activeSection === 'theses' ? 'link-viewed': 'link'} onClick={() => scrollToSection('theses')}>
                    Theses
                </li>
                <li className={activeSection === 'contact' ? 'link-viewed': 'link'} onClick={() => scrollToSection('contact')}>
                    Contact
                </li>
                </ul>
            </div>

            <div className='icons'>
                <BsGithub   className='gitIcon' onClick={() => openInNewTab(`https://github.com/kermattC`)}/>
                <BsLinkedin  className='linkedinIcon' onClick={() => openInNewTab(`https://www.linkedin.com/in/kermattc/`)}/>
                <BsFillFileEarmarkPersonFill className='personIcon' onClick={() => openInNewTab(`${process.env.PUBLIC_URL}/pdf/Matt_Resume.pdf`)}/>

            </div>
        </div>
    )
}

export default Navbar;