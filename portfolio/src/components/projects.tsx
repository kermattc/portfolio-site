import ProjectCard from "./projectCard";
import './../App.css'

import projectData from './../daterz/projects.json';

interface Project {
    title: string,
    description: string,
    timeline: string,
    thumbnail: string,
    link: string,
    skills: string[]
}

const projects: Project[] = projectData.projects;

export default function Projects() {
    // console.log("Project data: ", projects);
    
    return (
        <div className='projectContainer'>
            <h1 className='projectTitle'>Projects</h1>
            {                
                projects.map((project, index) => {
                    return(
                        <ProjectCard
                            key={index}
                            title={project.title}
                            timeline={project.timeline}
                            description={project.description} 
                            thumbnail={project.thumbnail}
                            link={project.link}
                            skills={project.skills}
                        />
                    )
                })
            }
        </div>
    )
}

