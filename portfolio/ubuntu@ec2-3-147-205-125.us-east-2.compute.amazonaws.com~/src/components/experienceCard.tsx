import './../styles/experienceCard.css'

interface ExperienceCardProps {
    title: string;
    descriptions: string[];
    timeline: string;
}

const ExperienceCard = ( { title, descriptions, timeline }: ExperienceCardProps ) => {

    return (
        <div className='experienceContainer'>
            <div className='experienceHeader'>

                {/* <div className='experienceTitle'> */}
                    <h2>{title}</h2>
                {/* </div> */}

                {/* <div className='experienceTimeline'> */}
                    <p>{timeline}</p>
                {/* </div> */}
            </div>
            <div className='experiencePoints'>
                {
                    descriptions.map((description, index) => {  
                        return (
                            <p key={index} className='experienceItem'>
                                {description}
                            </p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ExperienceCard;

