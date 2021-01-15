import React from "react";
import "./style.css";
import twitter from "../assets/img/twitter.png";

const Footer = () => {
    return (
        <footer className="container">
            <div className="d-flex justify-content-center">
                <a href="https://www.linkedin.com/in/djhersh/" target="_blank">
                    <img src="https://cdn2.iconfinder.com/data/icons/linkedin-ui-flat/48/LinkedIn_UI-02-512.png" className="linkedin" />
                </a>
                <a href="https://github.com/DJ620" target="_blank">
                    <img src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg" className="github mt-3"/>
                </a>
                <a href="https://twitter.com/DjhershWebDev" target="_blank">
                    <img src={twitter} class="twitter mt-1 ml-1"/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;