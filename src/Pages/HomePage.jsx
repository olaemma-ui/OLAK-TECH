
import About from "../Sections/About";
import Home from "../Sections/Home";
import Projects from "../Sections/Projects";
import Services from "../Sections/Services";


export function HomePage() {
    return (
        <>
            <Home />
            <About />
            <Services />
            <Projects />
        </>
    );
}