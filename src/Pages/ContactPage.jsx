import { AppTextArea, AppTextField, Jumbotron } from "../Components/Components";
import { contacts } from "../Data/ComponentData";


export const Contact =() => {
    return (
        
        <>
            <Jumbotron 
                page='contact' 
                id='contact'
                title='Get In Touch' 
                heading='Responsive & functional Software Solution' 
            />
            <div className="bg-white">
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-lg-6 mb-5">
                            <span>Get In Touch</span>
                            <h2 className="heading-2">
                                Send Us a Message!
                            </h2>

                            <form action="" className="mt-5">
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <AppTextField 
                                        bgColor='bg-trans' 
                                        icon='fa-user-circle' 
                                        type='text'
                                        placeholder= 'Full name **' />
                                    </div>

                                    <div className="col-md-6 mb-4">
                                        <AppTextField 
                                        bgColor='bg-trans' 
                                        icon='fa-envelope' 
                                        type='email'
                                        placeholder= 'Email address **' />
                                    </div>
                                </div>

                                <AppTextField 
                                bgColor='bg-trans' 
                                type='text'
                                placeholder= 'Subject **' />

                                <AppTextArea 
                                placeholder={'Enter Message **'}
                                bgColor='bg-trans' 
                                />

                                <button className="btn read-more w-100 mt-4">
                                    Send Message
                                </button>
                            </form>
                        </div>
                        {/* <div className="col-lg-1"></div> */}
                        <div className="col-lg-6 col-lg-5">
                            <span>Contact Us</span>
                            <h2 className="heading-2">
                                Reach us for help
                            </h2>

                            <div className="mt-5">
                            {
                                contacts.map((contact) => 
                                <div className='consult tel mb-4 pb-3 border-bottom'>
                                    <div className='p-4 h-100 rounded alert-success'>
                                        <i className={'fa fa-lg text-success '+contact.icon}></i>
                                    </div>
                                    <div className='content'>
                                        <p>
                                            {contact.title}
                                        </p>
                                        <p>
                                            {contact.content}
                                        </p>
                                    </div>
                                </div>
                            )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}