import './../styles/projectCard.css';

import { useState } from 'react';

interface ProjectCardProps {
    title: string,
    description: string,
    timeline: string,
    thumbnail: string
}

const ProjectCard = ( { title, description, timeline, thumbnail}: ProjectCardProps ) => {
    
    const [isHovered, setIsHovered] = useState<boolean>(false);
    
    function cardEnter(event: React.MouseEvent<HTMLDivElement>) {
    // function cardEnter(event: any) {
        setIsHovered(true);
    }

    function cardLeave(event: React.MouseEvent<HTMLDivElement>) {
        console.log("Leaving: ", event)
        setIsHovered(false);
    }

    return (
        <div className='projectContainer'>
            <div className={isHovered ? 'projectCard-hovered' : 'projectCard'} 
                onMouseEnter={(e) => cardEnter(e)} 
                onMouseLeave={(e) => cardLeave(e)}
            >
                <div className='left-details'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className='right-details'>
                    <p>{timeline}</p>
                    <img src="/figures/msc-thumbnail.png" alt="Thumbnail"/>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
