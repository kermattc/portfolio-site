import './../styles/projectCard.css';
import { useState } from 'react';

interface ProjectCardProps {
    title: string,
    description: string,
    timeline: string,
    thumbnail: string,
    link: string
}

const images: { [key:string]: string} = {
    'mscThumbnail': require('./../figures/msc-thumbnail.png'),
    'bscThumbnail': require('./../figures/bc-thumbnail.png'),
    'perntodoThumbnail': require('./../figures/perntodo-thumbnail.png'),
    'gooseThumbnail': require('./../figures/goose-thumbnail.png'),
    'baseballThumbnail': require('./../figures/baseball-stats-thumbnail.png'),
}

const ProjectCard = ( { title, description, timeline, thumbnail, link}: ProjectCardProps ) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    const pcThumbnail = images[thumbnail]

    function cardEnter(event: React.MouseEvent<HTMLDivElement>) {
    // function cardEnter(event: any) {
        setIsHovered(true);
    }

    function cardLeave(event: React.MouseEvent<HTMLDivElement>) {
        console.log("Leaving: ", event)
        setIsHovered(false);
    }

    function openInNewTab(): void {
        // window.location.href =link;
        window.open(link, "_blnk", "noreferrer");
    }

    return (
        <div className='projectContainer' onClick={() => openInNewTab()}>
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
                    {pcThumbnail ? <img className='thumbnail' src={pcThumbnail} alt={`${thumbnail} fig`} /> : null}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;

