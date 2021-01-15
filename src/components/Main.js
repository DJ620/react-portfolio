import React from "react";

const styles = {
    main: {
        marginTop: "10vh",
        marginBottom: "10vh",
        backgroundColor: "#6f83f5",
        backgroundImage: "url(https://www.transparenttextures.com/patterns/45-degree-fabric-dark.png)",
        transform: "skewY(-6deg)",
        boxShadow: "2px 2px 10px 1px black"
    },
    block: {
        paddingTop: "10vh",
        transform: "skewY(6deg)"
    }
};

const Main = props => {
    return (
        <main style={styles.main}>
            <div className="container" style={styles.block}>
                {props.children}
            </div>
        </main>
    );
};

export default Main;