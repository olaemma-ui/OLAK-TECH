import {Jumbotron} from "../Components/Components";
import { projects } from "../Data/ComponentData";
import Projects from "../Sections/Projects";


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
                       <Projects 
                            wrapper='Web Applications' 
                            title='Web' 
                            content='Web Application'
                            projects={projects}/>
                   </div>

                   <div className="mt-5">
                        <Projects 
                            wrapper='Mobile Applications' 
                            title='Mobile' 
                            content='Mobile Application'
                            projects={projects}/>
                   </div>

                   <div className="mt-5">
                        <Projects 
                            wrapper='Destop Applications' 
                            title='Desktop' 
                            content='Destop Application'
                            projects={projects}/>
                   </div>

                   <div className="mt-5">
                        <Projects 
                            wrapper='Python Software' 
                            title='Python' 
                            content='Python Software'
                            projects={projects}/>
                   </div>

                   <div className="mt-5">
                        <Projects 
                            wrapper='Data Analysis' 
                            title='Analysis' 
                            content='Data Analysis'
                            projects={projects}/>
                   </div>

                </div>
            </div>
        </>
    );
}