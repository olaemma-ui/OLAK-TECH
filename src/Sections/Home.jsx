import hero from "../asset/img/slider/hero-man-2.png";

function Home(){
    return (
        <section className="home" id="home">
            <div className="container">
                <section className="home-section mt-5">
                    <div className="row flex-column-revere">
                        <div className="col-md-8 d-flex mb-5 flex-column justify-content-center">
                            <h4 className="text-secondary">
                                Software Development 
                            </h4>

                            <h1 className="mt-3 heading-1">
                                For Tech 
                                IT Solution
                            </h1>

                            <h4 className="mt-3 text-secondary">
                                Along with desktop, mobile, and web services, we create websites and web applications. 
                                A three-month curriculum is also available from us to put the next generation on the tech race...
                            </h4>

                            <a href="https://" className="btn read-more">Read More</a>
                        </div>
                        <div className="col-md-4 mb-5">
                            <img src={hero} alt="vision" className="home-hero-img"/>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Home;