import { Link } from 'react-router-dom';
import feature from '../asset/img/feature/feature-1.jpg';
import { Wrapper } from '../Components/Components';
import { aboutUs } from '../Data/ComponentData';


function About() {
    return (
        <section className='container mt-5 mb-5' id='about'>
            <div className='row flex-row-reverse'>
                <div className='col-lg-7 mb-5'>
                    
                    <Wrapper 
                        wrapper='About' 
                        title='About Us' 
                        content='We provide digital experience services'
                    >
                        <div className='shadow-spread bg-white p-4 mt-4'>
                            <h5 className='text-secondary'>
                                {aboutUs.about}
                            </h5>

                            <h4 className='text-success m-0 p-0 mt-3'>
                                OLAK Tech.
                            </h4>
                        </div>

                        <Link to='/about' onClick={()=> window.scrollTo(0, 0)} className='btn read-more mt-5'>Know us Better</Link>
                    </ Wrapper>

                </div>
                <div className='col-lg-5 hero place-center'>
                    <img src={feature} alt='About' className=' w-100 rounded hero-img' />
                </div>
            </div>
        </section>
    );
}

export default About;