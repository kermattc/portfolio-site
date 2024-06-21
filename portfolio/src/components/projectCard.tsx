import './../styles/projectCard.css';
import SkillsNugget from './skillsNugget';
import { useState } from 'react';

interface ProjectCardProps {
    title: string,
    description: string,
    timeline: string,
    thumbnail: string,
    link: string,
    skills: string[]
}

const images: { [key:string]: string} = {
    'mscThumbnail': require('./../figures/msc-thumbnail.png'),
    'bscThumbnail': require('./../figures/bc-thumbnail.png'),
    'perntodoThumbnail': require('./../figures/perntodo-thumbnail.png'),
    'gooseThumbnail': require('./../figures/goose-thumbnail.png'),
    'baseballThumbnail': require('./../figures/baseball-stats-thumbnail.png'),
}

const ProjectCard = ( { title, description, timeline, thumbnail, link, skills}: ProjectCardProps ) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    const pcThumbnail = images[thumbnail]

    function cardEnter(event: React.MouseEvent<HTMLDivElement>) {
        setIsHovered(true);
    }

    function cardLeave(event: React.MouseEvent<HTMLDivElement>) {
        console.log("Leaving: ", event)
        setIsHovered(false);
    }

    function openInNewTab(): void {
        window.open(link, "_blnk", "noreferrer");
    }

    return (
        <div className='projectContainer' onClick={() => openInNewTab()}>
            <div className={isHovered ? 'projectCard-hovered' : 'projectCard'} 
                onMouseEnter={(e) => cardEnter(e)} 
                onMouseLeave={(e) => cardLeave(e)}
            >
                <div className='detailsContainer'>
                    <div className='left-details'>
                        <h2>{title}</h2>
                        <p>{description}</p>    
                    </div>
                    <div className='right-details'>
                        <p className='projectTimeline'>{timeline}</p>
                        {pcThumbnail ? <img className='thumbnail' src={pcThumbnail} alt={`${thumbnail} fig`} /> : null}
                    </div>
                </div>
                <div className='skillsContainer'>
                    <SkillsNugget skills={skills}/>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;

