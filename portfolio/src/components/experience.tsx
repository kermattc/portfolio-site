import './../App.css'

import experienceData from './../daterz/experience.json';

interface Experience {
    title: string;
    description: string[];
    timeline: string;
}

const experiences: Experience[] = experienceData.experience;

export default function Experience() {
    
    return (
        <div className='experienceContainer'>
            <h1 className='experienceTitle'>Experience</h1>
            {                
                // experiences.map((experience, index)) => {
                //     return(
                //     )
                // }
            }
        </div>
    )
}

