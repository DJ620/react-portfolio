import React from "react";

const Col = props => {
    return (
        <div className={props.attributes}>
            {props.children}
        </div>
    );
};

export default Col;