import React from "react";
import Col from "./Grid/Col";

const Description = props => {
    return (
        <Col attributes={`col-md-6 mb-5 ${props.side}`}>
            <p className="text-white about-me">
                {props.description}
            </p>
            <p className="technologies about-me text-center">Technologies Used:</p>
            <ul className="technologies about-me text-center list-unstyled">
                {props.tech.map(app => (
                    <li key={app}>{app}</li>
                ))}
            </ul>
        </Col>
    );
};

export default Description;