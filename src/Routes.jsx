import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Contact } from "./Pages/ContactPage";
import { Layout } from "./Layout";
import { HomePage } from "./Pages/HomePage";
import { AboutPage } from "./Pages/AboutPage";
import { CodeHamLet } from "./Pages/CodeHamlet";
import { ProjectsPage } from "./Pages/ProjectsPage";


export function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="codeHamlet" element={<CodeHamLet />} />
                    <Route path="projects" element={<ProjectsPage />} />

                    <Route path="*" element={<h1>Error 404 Page</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}