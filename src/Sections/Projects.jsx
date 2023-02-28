import { Wrapper, Slider, Project } from "../Components/Components";
import { projects } from "../Data/ComponentData";

function Projects() {
    return(
       <>
            <section id="projects">
                <div className="container mt-5 mb-5">
                        <Wrapper 
                            wrapper='Project' 
                            title='Projects' 
                            content='Our Projects!'
                        >
                        </ Wrapper>
                        
                        <Slider>
                            {projects.map((project)=> <Project {...project} />)}
                        </Slider>
                </div>
            </section>


       </>
    );
}

export default Projects;