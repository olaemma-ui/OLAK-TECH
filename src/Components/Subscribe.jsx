import { AppTextField, Wrapper } from "./Components";

function Subscribe() {
    return (
        <section className="cover-color">
            <div className="subscribe pb-5 pt-5 navbar">
                <div className="container">
                    <Wrapper
                        title='Subscribe' 
                        content='Subscribe to our Newsletter'
                    >
                        <h5>
                            Subscribe to our newsletter to get 
                            updates on upcoming events and programms...
                        </h5>
                    </Wrapper>
                    <div className="group-item spread-shadow mt-5 w-100">
                        
                        <AppTextField icon='fa-envelope' bgColor='bg-white' type='email' placeholder='E-mail address' />

                        <button className="btn sub-btn">
                            Subscribe Now <i className="fa fa-arrow-right font-sm pl-5 pr-5"></i>
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;