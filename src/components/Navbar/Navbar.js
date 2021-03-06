import React from "react";
import Col from "../Grid/Col";
import { Link, useLocation } from "react-router-dom";
import headshot from "../../assets/img/dh-PRINT-hr-1-round.png";
import "./Navbar.css";

const styles = {
    nav: {
        paddingTop: 90
    },
    adjust: {
        marginTop: "-1px",
        marginRight: "-1px"
    }
};

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="container">
            <div className="row" style={styles.nav}>
                <Col attributes="col-xl-2 col-xs-12 ml-lg-5 ml-xl-n3 pl-0 d-flex justify-content-center">
                    <img src={headshot} className="img-fluid" alt="DJ headshot" />
                </Col>
                <Col attributes="col-xl-5 col-lg-6 col-xs-12">
                    <div className="row">
                        <Col attributes="col d-flex justify-content-center justify-content-lg-start ml-xl-n4">
                            <Link to="/"><h1 className="display-3 name text-blue font-weight-bold mt-3"><strong>DJ Hersh</strong></h1></Link>
                        </Col>
                    </div>
                    <div className="row">
                        <Col attributes="col d-flex justify-content-center justify-content-lg-start mr-xl-5 ml-xl-n4">
                            <h2 className="mt-n4">Welcome to my portfolio!</h2>
                        </Col>
                    </div>
                </Col>
                <Col attributes="col-xl-5 col-lg-6 col-xs-12 mr-md-3 mr-lg-0 mr-xl-n3 ml-lg-n4 ml-xl-0 pr-md-n3 d-flex p-2 justify-content-center justify-content-lg-end">
                    <div style={styles.adjust}>
                        <ul className="list-inline mt-5 ml-xl-5">
                            <li className="list-inline-item"><Link to="/"><h2 className={location.pathname === "/" ? "font-weight-bold link-color" : "link-color"}>Portfolio</h2></Link></li>
                            <li className="list-inline-item ml-xs-3 ml-sm-4"><Link to="/about"><h2 className={location.pathname === "/about" ? "font-weight-bold link-color" : "link-color"}>About</h2></Link></li>
                            <li className="list-inline-item mr-lg-n4 ml-xs-3 ml-sm-4"><Link to="/contact"><h2 className={location.pathname === "/contact" ? "font-weight-bold link-color" : "link-color"}>Contact</h2></Link></li>
                        </ul>
                    </div>
                </Col>
            </div>
        </nav>
    );
};

export default Navbar;