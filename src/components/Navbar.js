import React from "react";
import Col from "./Grid/Col";

const Navbar = () => {
    return (
        <nav className="container mt-5">
            <div className="row">
                <Col class="col-xl-2 col-xs-12 ml-lg-5 ml-xl-n3 pl-0 d-flex justify-content-center">
                    <img src={require ("../assets/img/dh-PRINT-hr-1-round.png")} className="img-fluid" alt="DJ headshot" />
                </Col>
                <Col class="col-xl-5 col-lg-6 col-xs-12">
                    <div className="row">
                        <Col class="col d-flex justify-content-center justify-content-lg-start ml-xl-n4">
                            <a href="/"><h1 className="display-3 name text-blue font-weight-bold mt-3"><strong>DJ Hersh</strong></h1></a>
                        </Col>
                    </div>
                    <div className="row">
                        <Col class="col d-flex justify-content-center justify-content-lg-start mr-xl-5 ml-xl-n4">
                            <h2 className="welcome mt-n4">Welcome to my portfolio!</h2>
                        </Col>
                    </div>
                </Col>
                <Col class="col-xl-5 col-lg-6 col-xs-12 mr-md-3 mr-lg-0 mr-xl-n3 ml-lg-n4 ml-xl-0 pr-md-n3 d-flex p-2 justify-content-center justify-content-lg-end">
                    <div className='one-pix'>
                        <ul className="list-inline mt-5 ml-xl-5 skew">
                            <li className="list-inline-item"><a href="/"><h2 className="font-weight-bold link-color" id="portfolio-link">Portfolio</h2></a></li>
                            <li className="list-inline-item ml-xs-3 ml-sm-4"><a href="/about"><h2 className="link-color" id="about-me-link">About</h2></a></li>
                            <li className="list-inline-item mr-lg-n4 ml-xs-3 ml-sm-4"><a href="/contact"><h2 className="link-color">Contact</h2></a></li>
                        </ul>
                    </div>
                </Col>
            </div>
        </nav>
    );
};

export default Navbar;