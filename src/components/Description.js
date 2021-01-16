import React from "react";
import Col from "./Grid/Col";

const styles = {
    tech: {
        color: "#F7B801",
        lineHeight: "1.5em",
        fontSize: "22px",
        textShadow: "5px 5px 25px black"
    }
};

const Description = props => {
    return (
        <Col attributes={`col-md-6 mb-5 ${props.side}`}>
            <p className="text-white" style={styles.tech}>
                {props.description}
            </p>
            <p className="text-center" style={styles.tech}>Technologies Used:</p>
            <ul className="text-center list-unstyled" style={styles.tech}>
                {props.tech.map(app => (
                    <li key={app}>{app}</li>
                ))}
            </ul>
        </Col>
    );
};

export default Description;