import { Jumbotron, UserDetails, Wrapper } from "../Components/Components";
import { team, aboutUs } from "../Data/ComponentData";
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
                    <div className="row align-items-center">
                        <div className="col-lg-8 mb-5">
                       
                            <Wrapper 
                                wrapper='About' 
                                title='About Us' 
                                content='We provide digital experience services'
                            >
                                
                                <h5 className="border-bottom pb-3 mt-3">
                                   {aboutUs.about}
                                </h5>

                                <h3 className="text-success mt-5">
                                    Vision
                                </h3>
                                <h5 className="border-bottom pb-3 mt-3">
                                   {aboutUs.vision}
                                </h5>

                                <h3 className="text-success mt-5">
                                    Mission
                                </h3>
                                <h5 className="border-bottom pb-3 mt-3">
                                   {aboutUs.mission}
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
            <section className="container pb-5">
                <div className="mt-5 mb-5">
                    <Wrapper 
                        wrapper='Team' 
                        title='The Team' 
                        content='Meet the team!'
                    ></ Wrapper>
                </div>
                
                {team.map((team) =>  <UserDetails {...team} />)}
                
            </section>
        </section>
    );
}