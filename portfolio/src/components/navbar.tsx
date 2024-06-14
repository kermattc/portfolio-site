import React from 'react';

interface NavbarProps {
    scrollToSection: (section: string) => void;
    testyMcTestTest: string
}

// two ways of doing this. But just keep in mind to specify the props and their types. also for some reason people hate React.FC, might look into it later
const Navbar: React.FC<NavbarProps> = ({ scrollToSection, testyMcTestTest }) => {
// export const Navbar = ( {scrollToSection, temp }: NavbarProps) => {
    return(
        <>
            <h1>M.S. in Computer Science | Aspiring Software Engineer</h1>
            <p>{testyMcTestTest}</p>
            <ul>
            <li className='link' onClick={() => scrollToSection('home')}>
                Home
            </li>
            <li className='link' onClick={() => scrollToSection('about')}>
                About
            </li>
            <li className='link' onClick={() => scrollToSection('projects')}>
                Projects
            </li>
            <li className='link' onClick={() => scrollToSection('contact')}>
                Contact
            </li>
            </ul>
            
        </>
    )
}

export default Navbar;