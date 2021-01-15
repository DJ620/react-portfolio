import React from "react";

const Project = props => {
    return (
        <div className="row align-items-center">
            {props.children}
        </div>
    );
};

export default Project;