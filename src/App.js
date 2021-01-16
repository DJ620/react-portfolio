import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer";

const styles = {
    body: {
        fontFamily: "'Source Sans Pro', sans serif",
        backgroundColor: "#ffffff",
        backgroundImage: "url('https://www.transparenttextures.com/patterns/white-diamond.png')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "repeat"
    }
}

function App() {
    return (
        <Router>
            <div style={styles.body}>
                <Navbar />
                <Main>
                    <Route exact path="/" component={Portfolio} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </Main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;