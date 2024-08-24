import './../styles/projectCard.css';
import '../styles/projectCard.css';

interface SkillsNuggetProps {
    skills: string[]
}

const SkillsNugget = ( { skills } : SkillsNuggetProps ) => {
    
    // console.log("Skills from skills nuggets; ", skills)
    
    return (
        <>
            {                
                skills.map((skill, index) => {
                    return(
                        <div key={index} className='skillsNugget'>
                            {skill}
                        </div>
                    )
                })
            }
        </>
    )
}

export default SkillsNugget;

