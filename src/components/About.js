import React, { Component } from "react";
export default class About extends Component {
    render() {
        let projectData = this.props.projectData;
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img
                            className="profile-pic"
                            src="images/profilepic.jpg"
                            alt=""
                        />
                    </div>

                    <div className="nine columns main-col">
                        <h2>About</h2>
                        <p>{projectData.aboutme}</p>

                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{projectData.name}</span>
                                    <br />
                                    <span>{projectData.address}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
