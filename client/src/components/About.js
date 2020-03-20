import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class About extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <div id="page-wrapper">
                    <h1 id="about-heading">This is <a href="https://www.linkedin.com/in/paul-w-phelps/" alt="linkedIn profile" target="_blank" rel="noopener"><strong>me</strong></a>.<br /></h1>
                    <p className="about-text ">
                        <i>I'm a career changer.</i>
                    </p>
                    <p className="about-text">I've rapidly adapted to an industry I knew very little about at the onset.
                    With the help of <a href="https://burlingtoncodeacademy.com/" alt="burlington code academy home page" target="_blank" rel="noopener"><emphasis>Burlington Code Academy</emphasis></a> and expansive programming communities, I've honed and will continue to hone my skills, and expand my vocabulary.  <br /> </p>
                    <p className="about-text">“Too bad! Same old story! Once you’ve finished building your house you notice you’ve accidentally
                    learned something that you really should have known—before you started.” —Friedrich Nietzsche, Beyond Good and Evil</p>
                    Say < Link to={'/contact'} > <emphasis>hello</emphasis></Link >.
                   

                </div >
            </>
        )
    }
}

export default About
