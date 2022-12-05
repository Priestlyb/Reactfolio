import React from "react";
import Home from "../home/home";
import Qualifications from "../qualifications/qualifications";
import Header from "../header/header";
import Portfolio from "../portfolio/portfolio.js";
import Contact from "../contact/contact.jsx";
import Footer from "../footer/footer.jsx";
import Skill from "../skill/skill.jsx";

function Layout () {
    return (
    <>
        <Header />
        <Home />
        <Skill />
        <Qualifications />
        <Portfolio />
        <Contact />
        <Footer />
    </>
    )
}

export default Layout;