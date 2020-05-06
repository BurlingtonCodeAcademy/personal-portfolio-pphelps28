import React, { Component } from 'react'
export class Work extends Component {
    render() {
        return (
            <div id="heading-wrapper" className={this.props.animation}>
                <h1 id="about-heading2"><emphasis><strong>And this is what I know</strong></emphasis><br /></h1>
                <div id="skills-section">
                    <div id="skills-wrapper2">
                        <p className="about-text    "> <em className="list-header">Concepts</em><br />
                            <li>OOP</li>
                            <li>Version control</li>
                            <li>Git workflow</li>
                        </p>
                        <p className="about-text"><em className="list-header">Tools</em><br />
                            <li>Github</li>
                            <li>VS Code</li>
                        </p>
                        <p className="about-text"><em className="list-header">In Progress</em><br />
                            <li>PHP</li>
                            <li>SQL (mySQL)</li>
                            <li>React Native </li>
                            <li>Three.js</li>
                        </p>
                    </div>
                    <div id="skills-wrapper1">
                        <p className="about-text"><em className="list-header">Languages</em><br />
                            <li>JavaScript</li>
                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>PHP (some)</li>
                        </p>
                        <p className="about-text"><em className="list-header">Front End</em><br />
                            <li>React</li>
                            <li>Leaflet</li>
                            <li>jQuery</li>
                            <li>Firebase SDK</li>
                        </p>
                        <p className="about-text"><em className="list-header">Back End</em><br />
                            <li>NodeJS</li>
                            <li>NoSQL (MongoDB)</li>
                            <li>GridFS</li>
                            <li>Mongoose</li>
                            <li>Express</li>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work
