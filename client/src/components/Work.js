import React, { Component } from 'react'
export class Work extends Component {
    render() {
        return (
            <div id="heading-wrapper" className={this.props.animation}>
                <h1 id="about-heading2"><emphasis><strong>What I know</strong></emphasis><br /></h1>
                <div id="skills-section">
                    <div id="skills-wrapper2">
                        <p className="about-text    "> <em className="list-header">Concepts</em><br />
                            <li>OOP</li>
                            <li>AJAX</li>
                            <li>v. control</li>
                            <li>workflow</li>
                        </p>
                        <p className="about-text"><em className="list-header">Soft Skills</em><br />
                            <li>Communication</li>
                            <li>Independence</li>
                            <li>Teamwork</li>
                            <li>Humility</li>
                        </p>
                        <p className="about-text"><em className="list-header">In Progress</em><br />
                            <li>Material-UI</li>
                            <li>PHP</li>
                        </p>
                    </div>
                    <div id="skills-wrapper1">
                        <p className="about-text"><em className="list-header">Languages</em><br />
                            <li>Javascript</li>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JSS</li>
                        </p>
                        <p className="about-text"><em className="list-header">Frameworks/Libs</em><br />
                            <li>React</li>
                            <li>Leaflet</li>
                            <li>React-Leaflet</li>
                            <li>jQuery</li>
                        </p>
                        <p className="about-text"><em className="list-header">BackEnd</em><br />
                            <li>NoSQL (MongoDB)</li>
                            <li>Mongoose</li>
                            <li>Express</li>
                            <li>NodeJS</li>
                            <li>React-Router</li>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work
