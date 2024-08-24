import './../App.css'
import ExperienceCard from './experienceCard';

import experienceData from './../daterz/experience.json';

interface Experience {
    title: string;
    descriptions: string[];
    timeline: string;
}

const experiences: Experience[] = experienceData.experience;

export default function Experience() {
    
    return (
        <div className='experienceContainer'>
            <h1 className='experienceTitle'>Experience</h1>
                {                
                    experiences.map((experience, index) => {
                        return(
                            <ExperienceCard
                                key={index}
                                title={experience.title}
                                descriptions={experience.descriptions}
                                timeline={experience.timeline}
                            />
                        )
                    })
                }
        </div>
    )
}

