import React from "react";

const Col = props => {
    return (
        <div className={props.class}>
            {props.children}
        </div>
    );
};

export default Col;