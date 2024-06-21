import './../App.css'

export default function About() {
    return (
        <div className='aboutContainer'>
            <h1 className='aboutTitle'>About Me</h1>
            <h2>
                I'm an aspiring software engineer. I enjoy creating cool new technologies, and developing solutions.
            </h2>
            <p>
                {/* I've developed applications for my research projects throughout my academic career. For my bachelor's thesis I developed a mobile AR data visualization application. And for my master's thesis I developed a data-gathering VR application, which I later used the data for machine learning. */}
                I've developed applications for my research throughout my academic journey - 

                including a VR data-gathering application for my master's thesis, which involved using the collected data for machine learning analysis and a mobile AR data visualization application for my bachelor's thesis.
                After graduating, I decided to pursue full-stack development.
            </p>

            <p>
                I'm always learning new technologies and concepts to improve my skillset. 
                Nowadays, I'm practising developing full-stack applications using React and NodeJS, as well as integrating databases into my applications.
                
            </p>

            <p>
                Outside of coding, I'm getting better at baseball, customizing keyboards and playing guitar.
            </p>
        </div>
    )
}
