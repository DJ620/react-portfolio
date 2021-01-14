import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Route exact path="/" component={Portfolio} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Footer />
            </div>
        </Router>
    );
};

export default App;