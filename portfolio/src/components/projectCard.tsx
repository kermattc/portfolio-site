interface ProjectCardProps {
    title: string,
    description: string,
    thumbnail: string
}

const ProjectCard = ( { title, description, thumbnail}: ProjectCardProps ) => {
    return (
        <>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Temporary: {thumbnail}</p>
        </>
    )
}

export default ProjectCard;
