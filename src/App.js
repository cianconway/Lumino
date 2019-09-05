import React, { Component } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import projectData from "./projectData";
class App extends Component {
    render() {
        return (
            <div className="App">
                <Header projectData={projectData} />
                <About projectData={projectData} />
                <Portfolio
                    key={projectData.portfolio.key}
                    projectData={projectData}
                />
                <Testimonials projectData={projectData} />
                <ContactUs projectData={projectData} />
                <Footer projectData={projectData} />
            </div>
        );
    }
}

export default App;
