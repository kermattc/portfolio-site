import './../App.css'

export default function About() {
    return (
        <div className='aboutContainer'>
            <h1 className='aboutTitle'>About Me</h1>
            <h2>
                I'm a software engineer in the making. I enjoy diving into new technologies, tinkering with them, and building awesome applications.
            </h2>
            <p>
                Throughout my academic journey I've developed several applications for research -
                including a VR midair handwriting application for my master's thesis, where I collected handwriting data for machine learning analysis, and a mobile AR data visualization app for my bachelor's thesis. 
                After graduating, I've branched out to full-stack development, exploring various technologies and focusing on frontend, backend, and database design. I've also been diving into cloud solutions like AWS to enhance my applications.
            </p>

            <p>
                {/* I'm always learning new technologies and concepts to improve my skillset.  */}
                {/* Nowadays, I'm practising developing full-stack applications using React and NodeJS, as well as integrating databases into my applications. */}
                
            </p>

            <p>
                Outside of coding, I love playing guitar, customizing keyboards and practising baseball when the season arrives!
            </p>
        </div>
    )
}
