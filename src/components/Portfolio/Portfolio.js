import React from "react";
import Project from "../Project";
import Card from "../Card/Card";
import Description from "../Description";
import storeFront from "../../assets/img/storefront-copy.png";
import Emergence from "../../assets/img/emergence.png";
import Rainshine from "../../assets/img/rain-shine.png";
import Burger from "../../assets/img/build-a-burger.png";
import Quiz from "../../assets/img/code-quiz.png";
import Planner from "../../assets/img/daily-planner.png";
import Episorder from "../../assets/img/episorder.png";
import Resume from "../../assets/DJ-resume.pdf";

const Portfolio = () => {

    const position = {
        leftCard: "pl-md-0",
        rightCard: "pr-md-0 justify-content-end order-1 order-md-2",
        rightDescription: "pr-md-0",
        leftDescription: "pl-md-0 order-2 order-md-1"
    };

    return (
        <div className="my-5">
            <Project>
                <Card
                    side={position.leftCard}
                    title="Store Front"
                    deployed="https://damp-badlands-04282.herokuapp.com/"
                    image={storeFront}
                    repo="https://github.com/DJ620/Store-Front"
                />
                <Description
                    side={position.rightDescription}
                    description="Collaborated with a team of 3 other developers to build this web application that allows store owners to create a fully-customized online store with a user-friendly interface. My contribution to this project was writing all of the back-end code to create the server and database."
                    tech={["Express", "Express Handlebars", "MySQL", "Sequelize", "Cloudinary API", "jQuery", "Bootstrap"]}
                />
            </Project>
            <Project>
                <Description 
                    side={position.leftDescription}
                    description="Collaborated with a team of 3 other developers to build this web application that allows music-lovers to discover local artists of any genre in their city. My contribution to this project was implementing the Youtube API, as well as writing the code for the overall functionality."
                    tech={["Youtube API", "Spotify API", "JSCharting", "jQuery", "Bootstrap"]}
                />
                <Card 
                    side={position.rightCard}
                    title="Emergence"
                    deployed="https://awsiegfried.github.io/Emergence_v1/"
                    image={Emergence}
                    repo="https://github.com/AWSiegfried/Emergence_v1"
                />
            </Project>
            <Project>
                <Card 
                    side={position.leftCard}
                    title="RainShine"
                    deployed="https://dj620.github.io/rain-shine/"
                    image={Rainshine}
                    repo="https://github.com/DJ620/rain-shine"
                />
                <Description 
                    side={position.rightDescription}
                    description="This is a weather application that allows a user to get the current weather conditions, as well as a 5-day forecast for any city. Each city searched will be saved to the page, or can be removed by clicking the delete button."
                    tech={["OpenWeather API", "jQuery", "Bootstrap"]}
                />
            </Project>
            <Project>
                <Description 
                    side={position.leftDescription}
                    description="This is a restaurant application that emulates the experience of building and then devouring a burger. It was created using the MVC paradigm."
                    tech={["Express", "Express Handlebars", "MySQL", "jQuery", "Bootstrap"]}
                />
                <Card 
                    side={position.rightCard}
                    title="Build-A-Burger"
                    deployed="https://blooming-plains-91984.herokuapp.com/"
                    image={Burger}
                    repo="https://github.com/DJ620/build-a-burger"
                />
            </Project>
            <Project>
                <Card 
                    side={position.leftCard}
                    title="Code Quiz"
                    deployed="https://dj620.github.io/code-quiz/"
                    image={Quiz}
                    repo="https://github.com/DJ620/code-quiz"
                />
                <Description 
                    side={position.rightDescription}
                    description="This is a multiple choice coding quiz I built early in my coding bootcamp. You have 1 minute to answer as many multiple choice questions as you can, and get the chance to add your score to the high-score board."
                    tech={["Vanilla JavaScript", "Local Storage", "Bootstrap"]}
                />
            </Project>
            <Project>
                <Description 
                    side={position.leftDescription}
                    description="This is a daily planner application. It displays normal working hours, with a color-code showing the current hour of the day. Users can create and delete daily events or tasks into any hour block."
                    tech={["Moments.js", "jQuery", "Bootstrap"]}
                />
                <Card 
                    side={position.rightCard}
                    title="Daily Planner"
                    deployed="https://dj620.github.io/plan-your-day-efficiently/"
                    image={Planner}
                    repo="https://github.com/DJ620/plan-your-day-efficiently"
                />
            </Project>
            <Project>
                <Card 
                    side={position.leftCard}
                    title="Episorder"
                    deployed="https://dj620.github.io/episorder/"
                    image={Episorder}
                    repo="https://github.com/DJ620/episorder"
                />
                <Description 
                    side={position.rightDescription}
                    description="This is a web application that allows users to choose any number of tv shows, and sort their episodes based on air date. I created this app so that fans of franchise's such as CW's super hero shows can easily figure out what order to watch episodes while staying on the correct timeline."
                    tech={["EpisoDate API", "Bootstrap", "jQuery"]}
                />
            </Project>
            <div className="d-flex justify-content-center pb-5">
                <a href={Resume} className="btn btn-lg repo text-white" target="_blank" style={{backgroundColor: "#F7B801"}}>View Resume</a>
            </div>
        </div>
    );
};

export default Portfolio;