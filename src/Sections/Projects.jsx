import { Link } from "react-router-dom";
import { Wrapper, Slider, Project, handleScroll } from "../Components/Components";
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

                        <Link to='/projects' onClick={handleScroll} className='read-more no-decoration'>
                            See More
                        </Link>
                </div>
            </section>


       </>
    );
}

export default Projects;
