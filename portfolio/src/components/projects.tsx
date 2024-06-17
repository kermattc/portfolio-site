import ProjectCard from "./projectCard";

import projectData from './../daterz/projects.json';

interface Project {
    title: string,
    description: string,
    timeline: string,
    thumbnail: string
}

const projects: Project[] = projectData.projects;

export default function Projects() {
    // console.log("Project data: ", projects);
    
    return (
        <div>
            <h3>Placeholder title - Projects section</h3>
            {                
                projects.map((project, index) => {
                    return(
                        <ProjectCard
                            key={index}
                            title={project.title}
                            timeline={project.timeline}
                            description={project.description} 
                            thumbnail={project.thumbnail}
                        />
                    )
                })
            }
        </div>
    )
}

