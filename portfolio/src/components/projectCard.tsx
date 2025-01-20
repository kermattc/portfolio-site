import './../styles/projectCard.css';
import SkillsNugget from './skillsNugget';
import { useState } from 'react';
import Modal from './modal';

interface ProjectCardProps {
    title: string,
    description: string,
    timeline: string,
    thumbnail: string,
    link: string,
    demoLink: string,
    skills: string[],
    type: string
}

const images: { [key:string]: string} = {
    'mscThumbnail': require('./../figures/msc-thumbnail.png'),
    'bscThumbnail': require('./../figures/bc-thumbnail.png'),
    'perntodoThumbnail': require('./../figures/perntodo-thumbnail.png'),
    'gooseThumbnail': require('./../figures/goose-thumbnail.png'),
    'baseballThumbnail': require('./../figures/baseball-stats-thumbnail.png'),
    'guitarLookupThumbnail': require('./../figures/guitar-lookup-thumbnail.png'),
    'portfolioThumbnail': require('./../figures/portfolio-thumbnail.png'),
}

const ProjectCard = ( { title, description, timeline, thumbnail, link, demoLink, skills, type }: ProjectCardProps ) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [isPortfolioHovered, setIsPortfolioHovered] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isNoticeVisible, setIsNoticeVisible] = useState<boolean>(false);

    const pcThumbnail = images[thumbnail]
    let timer: NodeJS.Timeout;

    function cardEnter(event: React.MouseEvent<HTMLDivElement>) {
        if (type === 'project' || type === 'thesis' || type === 'baseball-maintenance') { 
            setIsHovered(true);
        } else if (type === 'portfolio') {
            setIsPortfolioHovered(true);
            timer = setTimeout(() => setIsNoticeVisible(true), 750); // show notice after hovering this div for a bit
        }
    }

    function cardLeave(event: React.MouseEvent<HTMLDivElement>) {
        if (type === 'project' || type === 'thesis' || type === 'baseball-maintenance') { 
            setIsHovered(false);
        } else if (type === 'portfolio') {
            setIsPortfolioHovered(false);
            clearTimeout(timer);
        }
        
        // bug will occur where hovering over other portfolio cards will also reveal the notice
        if (type === 'portfolio') {
            setIsNoticeVisible(false); 
        }
    }

    function openModal(): void {
        if (type === 'thesis' || type === 'baseball-maintenance') {
            setIsModalOpen(true);
        } else if (type === 'portfolio') { 
            return
        } else {
            openInNewTab()
        }
    }

    function openInNewTab(): void {
        window.open(link, "_blank", "noreferrer");
    }

    return (        
        <>
            <div className='projectContainer'  onClick={openModal}>
                <div className={`
                    ${isHovered ? 'projectCard-hovered' : 'projectCard'}
                    ${isPortfolioHovered ? 'portfolioCard-hovered': 'portfolioCard'}
                    `}
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
                    { title === 'Baseball Stats Website' && (
                        <div className='maintenance-notice'>
                            Under maintenance
                        </div>
                        )
                    }
                    { isNoticeVisible && type === 'portfolio' && (
                        <div className="notice">
                            You're already here!
                        </div>
                    )}
                </div>
            </div>
            { isModalOpen ? 
                <Modal modalToggle={setIsModalOpen} openLink={openInNewTab} demoLink={demoLink} type={type}/>
                : 
                null
            }
    </>
    )
}

export default ProjectCard;

