import ProjectCard from "./projectCard";
import './../App.css';

import thesisData from '../daterz/thesis.json';

interface Project {
    title: string,
    description: string,
    timeline: string,
    thumbnail: string,
    link: string,
    demoLink: string,
    skills: string[],
    type: string
}

const theses: Project[] = thesisData.theses;

export default function Theses() {
    return (
        <div className='projectContainer'>
            <h1 className='thesesTitle'>Thesis Projects</h1>
            {                
                theses.map((thesis, index) => {
                    return(
                        <ProjectCard
                            key={index}
                            title={thesis.title}
                            timeline={thesis.timeline}
                            description={thesis.description} 
                            thumbnail={thesis.thumbnail}
                            link={thesis.link}
                            demoLink={thesis.demoLink}
                            skills={thesis.skills}
                            type={thesis.type}
                        />
                    )
                })
            }
        </div>
    )
}

