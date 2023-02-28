import { FooterLinkHeader, PageLinks} from "./Components";
import { navLinks, services } from "../Data/ComponentData";

function Footer() {
    return (
        <footer className="footer pb-5 pt-4 pl-3 p-3 text-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mt-4">
                        <FooterLinkHeader title='Get In Touch'>
                            <h5>
                                N<u>0</u>: 10 ICT odunjo street, 
                                off Onikoko Adigbe panseke 
                                Abeokuta Ogun State Nigeria. 
                            </h5>

                            <h5 className='mt-3 lh-2'>
                                <b className='text-light font-md'>
                                    Open : &nbsp;
                                </b>
                                Monday to Saturday
                                From 7h to 18h or talk to an expert <br />
                                (+234) 810 1995 824 – available 24/8
                            </h5>    
                        </FooterLinkHeader>
                    </div>

                    <div className="col-md-4 mt-4">
                        <FooterLinkHeader title='Quick Links'>
                            <PageLinks padding='p-0 pt-3'  links = {navLinks} />
                        </FooterLinkHeader>
                    </div>

                    <div className="col-md-4 mt-4">
                        <FooterLinkHeader title='Our Services' >
                            <PageLinks padding='p-0 pt-3' links = {services} />
                        </FooterLinkHeader>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;