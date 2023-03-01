import { AppTextArea, AppTextField, Jumbotron, Project, Slider, Wrapper } from "../Components/Components";
import { projects } from "../Data/ComponentData";


export const ProjectsPage =() => {
    return (
        
        <>
            <Jumbotron 
                page='Projects' 
                id='projects'
                title='Our Projects' 
                heading='Responsive & functional Software.' 
            />
            <div className="bg-white pt-5 pb-5">
                <div className="container">
                   
                   <div className="mt-5">
                        <Wrapper 
                            wrapper='Web Applications' 
                            title='Web' 
                            content='Web Application'
                        >
                        </ Wrapper>
                        
                        <Slider>
                            {projects.map((project)=> <Project {...project} />)}
                        </Slider>
                   </div>

                   <div className="mt-5">
                        <Wrapper 
                            wrapper='Mobile Applications' 
                            title='Mobile' 
                            content='Mobile Application'
                        >
                        </ Wrapper>
                        
                        <Slider>
                            {projects.map((project)=> <Project {...project} />)}
                        </Slider>
                   </div>

                   <div className="mt-5">
                        <Wrapper 
                            wrapper='Destop Applications' 
                            title='Desktop' 
                            content='Destop Application'
                        >
                        </ Wrapper>
                        
                        <Slider>
                            {projects.map((project)=> <Project {...project} />)}
                        </Slider>
                   </div>

                   <div className="mt-5">
                        <Wrapper 
                            wrapper='Python Software' 
                            title='Python' 
                            content='Python Software'
                        >
                        </ Wrapper>
                        
                        <Slider>
                            {projects.map((project)=> <Project {...project} />)}
                        </Slider>
                   </div>

                   <div className="mt-5">
                        <Wrapper 
                            wrapper='Data Analysis' 
                            title='Analysis' 
                            content='Data Analysis'
                        >
                        </ Wrapper>
                        
                        <Slider>
                            {projects.map((project)=> <Project {...project} />)}
                        </Slider>
                   </div>

                </div>
            </div>
        </>
    );
}