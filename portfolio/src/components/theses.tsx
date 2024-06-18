import ProjectCard from "./projectCard";

import thesisData from '../daterz/thesis.json';

interface Project {
    title: string,
    description: string,
    timeline: string,
    thumbnail: string,
    link: string
}

const theses: Project[] = thesisData.theses;

export default function Theses() {
    console.log("Theses: ", theses);
    return (
        <div>
            <h3>Placeholder title - Thesis section</h3>
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
                        />
                    )
                })
            }
        </div>
    )
}

