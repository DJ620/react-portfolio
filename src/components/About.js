import React from "react";
import Col from "./Grid/Col";
import Headshot from "../assets/img/headshot2.jpg";

const styles = {
    headshot: {
        borderRadius: "25px",
        boxShadow: "5px 5px 20px -5px black"
    },
    about: {
        lineHeight: "1.5em",
        fontSize: "22px",
        textShadow: "5px 5px 25px black"
    }
}

const About = () => {
    return (
        <div className="row" style={{marginTop: "80px", paddingBottom: "100px"}}>
            <Col attributes="col-12 col-lg-7 pl-lg-0 pr-lg-5">
                <h5 className="text-white mb-5" style={styles.about}>Hello there! I'm DJ. I am an up and coming web developer, currently in the UCLA Extension Full-Stack Web Development Coding Bootcamp. It's going great, thanks for asking. Prior to taking this bootcamp, I had done some learning on my own through websites such as CodeCademy and FreeCodeCamp.
                I gotta say, I'm really enjoying learning about how the internet thinks! I love how logical it all is, especially JavaScript. Don't get me wrong, I'm still a student, and totally wanna rip my hair out at times, staring at my screen like a zombie, only to find that it was just a period out of place.
                But hey, I guess that's the name of the game. And truth be told, I understand more and more everyday! Imagine where I'll be at the end of this bootcamp! </h5>
                <h5 className="text-white mb-5" style={styles.about}>Before I decided to jump into the world of coding, I was living in New York City pursuing a career as an actor. I know, kinda cliche, but I enjoyed my life. I was working as a server (an actor working as a server? Never...) at Ellen's Stardust Diner.
                I wasn't just an ordinary server, I was a SINGING server. That's right, you read that correctly. While I would go off to fetch your Coca-cola, I would come back with a microphone in my other hand belting out 50's songs and showtunes. It was a fun time!
                Once the world kinda fell into a dark pit of despair (you know what I'm talking about), I realized that I wanted stability and structure in my life. So, here I am, reinventing myself as the world's best web developer! Or, at least, a competent one. 
                Please enjoy looking through my portfolio of projects I've been working on!</h5>
            </Col>
            <Col attributes="col-12 ml-md-5 ml-lg-0 pl-md-5 pl-lg-0 col-lg-5 mt-lg-5 mt-xl-3 pt-lg-5 pt-xl-0 pr-lg-0">
                <img src={Headshot} alt="DJ Headshot" style={styles.headshot} className="img-fluid mb-xl-5" />
            </Col>
        </div>
    );
};

export default About;