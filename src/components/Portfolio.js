import React from "react";
import Project from "./Project";

const styles = {
    space: {
        marginTop: "70px"
    }
};

const Portfolio = () => {
    return (
        <div className="mb-5" id="portfolio">
            <Project
                style={styles.space}
            />
        </div>
    );
};

export default Portfolio;