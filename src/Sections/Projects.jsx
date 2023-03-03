import { Link } from "react-router-dom";
import { Wrapper, Slider, Project, handleScroll } from "../Components/Components";
import OwlCarousel from 'react-owl-carousel'; 

import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    rewind: true,
    navText: [],
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 3,
        }
    },
  };
function Projects({projects, wrapper, title, content, children}) {
   
    return(
       <>
            <section id="projects">
                <div className="container mt-5 mb-5">
                        <Wrapper 
                            wrapper={wrapper} 
                            title={title} 
                            content={content}
                        >
                        </ Wrapper>
                        
                        <OwlCarousel className="owl-carousel" {...options}>
                            {projects.map((project)=> <Project {...project} />)}
                        </OwlCarousel>
                        {children}
                </div>
            </section>


       </>
    );
}

export default Projects;
