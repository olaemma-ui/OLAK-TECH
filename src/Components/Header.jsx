import { Logo, PageLinks } from "./Components";
import { contacts, navLinks } from "../Data/ComponentData";

function Header() {

    return (
       <>
            <header className='navbar container bg-light'>
                {
                    contacts.map((contact) => <a href={contact.href} className='consult tel mb-2'>
                        <div className='glow-icon alert-success'>
                            <i className='fa fa-phone text-success'></i>
                        </div>
                        <div className='content'>
                            <p>
                                {contact.title}
                            </p>
                            <p>
                                {contact.content}
                            </p>
                        </div>
                    </a>
                )}

                <a href='tel' className='rounded-button alert-success'>
                    Free Consultation
                </a>
              
            </header>

            <nav className='navbar container sticky-top app-nav border-top bg-light justify-content-between p-2'>
                <Logo />

                <aside className=''>
                    <PageLinks links = {navLinks} />
                </aside>
            </nav>
       </>
    ); 
}


export default Header;