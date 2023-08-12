
    import { Wrapper, Service } from "../Components/Components";
import { services } from "../Data/ComponentData";


function Services() {
    return (
        <section className="Pt-5 pb-5" id="services">
            <div className="container">
                <Wrapper 
                    wrapper='Service' 
                    title='Service' 
                    content='What we do ?'
                >
                </ Wrapper>

                <div className="row justify-content-space-between">
                {services.map((service)=> 
                    <div className="col-md-4 col-lg-4 col-12 mt-4">
                        <Service {...service} />
                    </div>
                )}
                </div>
            </div>

        </section>
    );
}

export default Services;