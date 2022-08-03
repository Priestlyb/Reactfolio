import React from "react";
import Header from "../header/header";
import Home from "../home/home";
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
        <Portfolio />
        <Contact />
        <Footer />
    </>
    )
}

export default Layout;