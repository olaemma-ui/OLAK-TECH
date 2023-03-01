import { Jumbotron, Wrapper } from "../Components/Components";
import img  from "../asset/img/blog/blog-5.jpg";
export const AboutPage =() => {
    return (
        <section className="pt-5">
            <Jumbotron 
                page='About Us' 
                id='About Us'
                title='About Us' 
                heading='Get to know us better' 
            />
            <div className="bg-white ">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-lg-8 mb-5">
                       
                            <Wrapper 
                                wrapper='About' 
                                title='About Us' 
                                content='We provide digital experience services'
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

                            </ Wrapper>


                        </div>
                        {/* <div className="col-lg-1"></div> */}
                        <div className="col-lg-4">
                           <img src={img} className="w-100 rounded-10" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="mt-5 mb-5">
                    <Wrapper 
                        wrapper='Team' 
                        title='The Team' 
                        content='Meet the team!'
                    ></ Wrapper>
                </div>

                
            </div>
        </section>
    );
}