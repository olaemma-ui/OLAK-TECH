import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Subscribe from "./Components/Subscribe";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Subscribe />
            <Footer />
        </>
    );
}

export {Layout};