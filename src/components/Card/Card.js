import React from "react";
import Col from "../Grid/Col";
import "./Card.css";

const styles = {
    card: {
        background: "transparent",
        border: 'none',
        marginBottom: "5vh"
    },
    button: {
        backgroundColor: "#F7B801"
    }
};

const Card = props => {
    return (
        <Col attributes={`col-md-6 d-inline-flex ${props.side}`}>
            <div style={styles.card}>
                <div className={`card-body ${props.side}`}>
                    <h1 className="card-title text-center font-weight-bold project">{props.title}</h1>
                    <a href={props.deployed} target="_blank">
                        <img src={props.image} className="box-shadow img-fluid mb-5" />
                    </a>
                    <div className="d-flex justify-content-around">
                        <a href={props.repo} target="_blank" className="btn text-white mt-n4 repo" style={styles.button}>
                            <span className="fab fa-github"></span> GitHub Repository
                        </a>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Card;