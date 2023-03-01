import { Link, NavLink} from 'react-router-dom';
import logo from '../asset/img/logo/logo.png';

 const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({behavior: 'smooth'});
    else window.scrollTo(0, 0);
}

function Wrapper({wrapper, title, content, children}) {
    return (
        <section className={'wrapper'}>
            <h1 className={'bg-wrapper'}>{wrapper}</h1>
            <div className={'h-100'}>
                <h1 className={'label'}>{title}</h1>

                <h1 className={'heading-2 mt-4'}>
                    {content}
                </h1>
                {children}
            </div>
        </section>
    );
}

function ServiceCard(props) {
    return (
        <div className={'service-card mt-4'}>
            <div className={'header'}>
                <div className={'glow-icon alert-success w-6em h-6em'}>
                    <i className={'fa font-xxl text-success '+props?.icon}></i>
                </div>
            </div>

            <div className={'service-card-body'}>
                <h3 className={'service-card-title font-bold mt-5'}>{props?.title}</h3>
                
                <div className={'mt-4 service-card-content'}>
                    {props?.content?.map((data) => 
                        <p className={'d-flex justify-content-between'}>
                            <span>{data}</span>
                            <i className={'fa fa-check text-success'}></i>
                        </p>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

function Slider(props){
    var scrollPosition = [];
    var position = 0;
    document.querySelectorAll('.slider').forEach((e, i) => {
        scrollPosition[i] = 0;
        
        // console.log(e.children);
        // setInterval(() => {
        //     if(scrollPosition[i] < e.scrollWidth){
        //         scrollPosition[i] += 400;
        //         console.log('less');
        //     }else scrollPosition = 0;
        //     position = scrollPosition;
        // }, 1000);

    });
    return(
        <div className="slider" style={{
                    transform: `translate3d(${position}px, 0px, 0px)`, 
                    transition: `all 2s ease 0s`,
                    width: `5748px`
                }}>
                    {console.log(position)}
            {props.children}
        </div>
    );
}

function Logo() {
    return (
        <a href='http://' className='text-dark nav-brand' >
            <img src={logo} className='logo' alt='' />
            <span>
                    <span>OTIS</span>
                <small>OLAK Technologies</small>
            </span>
        </a>
    );
}

function Project(props){
    return (
        <div className="project-card">
            <img src={props.img} alt="" className="project-img" />
            <div className="project-body">
                <div className="bg-light navbar">
                    <Logo />
                </div>

                <div className="project-content">

                    <span>
                        <h3>
                            {props.title}
                        </h3>
                        <small className="font-sm project-about">{props.about}</small>    
                    </span>

                    <a href={props.link} className="rounded-btn">
                        <i className="fa fa-arrow-right"></i>
                    </a>

                </div>
            </div>
        </div>
    );
}

function Service({title, summary, icon, link}){
    return (
        <Link to={link} onClick={handleScroll} className={'summary shadow-spread tel align-items-center h-100 border p-3 rounded-20'}>
            <div className={'glow-icon mb-2 w-4em h-4em alert-success border border-success'}>
                <i className={'fa-lg fa text-success ' + icon}></i>
            </div>
            <div className='summary-content w-100'>
                <p className='text-dark font-bold mb-2'>
                    {title}
                </p>

                <p className='text-secondary mb-2'>
                    {summary} 
                </p>
            </div>
        </Link>
    );
}


function FooterLinkHeader({title, children}){
    return(
        <>
            <h4 className='footer-link-header font-bold'>
                {title}
            </h4>

            <div className="body text-secondary">
                {children}
            </div>
        
        </>
    );
}

function PageLinks({links, padding}){

    return (
        <ul className="navbar nav flex-colum align-items-start p-0 gap-3">
            {
                links.map((link) => 
                    <li className="nav-item">
                        <NavLink
                            onClick={()=>{handleScroll(link.id)}}
                            to={link.link} 
                            
                            className={`nav-link text-secondary ${padding}`}
                        >
                            {link.title}
                        </NavLink>
                    </li>
                )
            }
        </ul>
    );
}

function AppTextField({id, type, placeholder, errMsg, icon, bgColor}) {
    
    return(
        <div className={'app-text-field '+bgColor}>  
            <label 
                htmlFor={id} 
                className={'app-text-field-icon far '+icon}>
            </label>
            <input 
                id={id}
                type={type} 
                className={'app-text-field-input '} 
                placeholder={placeholder} 
            />
            <label htmlFor={id} className='text-danger font-sm'>
                {errMsg}
            </label>
        </div>
    );
}

function AppTextArea({id, placeholder, errMsg, bgColor}) {
    
    return(
        <div className={'app-text-area mt-4 '+bgColor}>  
            <textarea
                id={id}
                className={'app-text-area'} 
                placeholder={placeholder} 
            ></textarea>
            <label htmlFor={id} className='text-danger font-sm'>
                {errMsg}
            </label>
        </div>
    );
}

function Jumbotron({id, title, heading, page}){
    return (
        <>
            <section className='jumbotron' id={id}>
                <div className="container pt-5">
                    <div className="row h-20em jumbotron align-items-center">
                        <div className="col-md-8 d-flex mb-5 flex-column justify-content-center">
                            <h4 className="text-secondary">
                                {heading} 
                            </h4>

                            <h2 className="mt-2 heading-1">
                                {title}
                            </h2>
                        </div>
                        <div className="col-md-4 mb-5">
                            <div className="shadow btn btn-light p-3 rounded">
                                <Link to='/' className='text-dark no-decoration p-3'>
                                    Home &nbsp;|
                                </Link>
                                <span className='text-secondary'>{page}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

function Skill({img, title, content}) {
    return (
        <div className="w-100 shadow-spread rounded-20 bg-white skill-card">
            
            <img src={img} alt='' className="w-100 rounded-top-20 border-bottom-5" />

            <p className="skill-icon place-center p-2 bg-white">
                <img src={logo} className='w-100' alt="" />
            </p>
            <div className="skill-content p-3">
                <h4 className="m-0 font-bold"> {title} </h4>
                <span className="d-block mt-3"> {content} </span>
            </div>
        </div>
    );
}



export {
    Wrapper, 
    ServiceCard,
    Slider,
    Project,
    Logo,
    Service,
    FooterLinkHeader,
    PageLinks,
    AppTextField,
    AppTextArea,
    Jumbotron, 
    handleScroll,
    Skill
};