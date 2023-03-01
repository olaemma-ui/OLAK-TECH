import { Link } from "react-router-dom";
import { Jumbotron, Skill,  Wrapper } from "../Components/Components";
import { skills } from "../Data/ComponentData";

import img from "../asset/img/blog/blog-9.jpg";

export const CodeHamLet =() => {
    return (
        <section className="pt-5">
            <Jumbotron 
                page='Code Hamlet' 
                id='codeHamlet'
                title='Code Hamlet' 
                heading='Learn new Tech Skill from us' 
            />
            <div className="bg-white ">
                <div className="container pt-5 pb-5">
                    <div className="row flex-md-row-reverse mb-5">

                        <div className="col-lg-6 mb-5">
                       
                            <Wrapper 
                                wrapper='Code Hamlet' 
                                title='Code Hamlet' 
                                content='We offer the best skills with the right tutoring.'
                            >
                                
                                <h5 className="border-bottom pb-3">
                                    We help our client succeed by building and developing software 
                                    that solves their problems.
                                    The farmers will make more money. 
                                    Your lunch will not be imported, 
                                    cassava garri ewa and ehhh ehhhhnn. 
                                    The farmer will make money, 
                                    the dinner would be cassava, eba, ewa and everything.                                    
                                </h5>

                                <Link to='' className="btn read-more">Read More</Link>

                            </ Wrapper>

                        </div>

                         
                        <div className="col-lg-6">
                           <img src={img} className="w-100 rounded-10" alt="" />
                        </div>
                    </div>
                    <Wrapper 
                        wrapper='Skills' 
                        title='Skills' 
                        content='Skill and Technologies we offer'
                    >
                    </ Wrapper>
                    <div className="row mt-5">

                        {
                            skills.map((skill) => {
                                return (
                                    <div className="col-md-6 col-lg-4 mb-5">
                                        <Skill {...skill} />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    );
}