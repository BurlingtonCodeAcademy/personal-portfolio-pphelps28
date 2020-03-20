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
                    <p className="about-text">And I'm currently adapting to a new industry.
                    With the help of <a href="https://burlingtoncodeacademy.com/" alt="burlington code academy home page" target="_blank" rel="noopener"><emphasis>Burlington Code Academy</emphasis></a> and expansive programming communities, I've honed and will continue to hone my skills, and expand my vocabulary.  <br /> </p>
                    <p className="about-text"> It's not easy, and I make plenty of mistakes, but every day I learn something, even if it's how little I actually know. That being said, that learning is quick and frequent.  It's like my favorite quote from a book I've never read goes:</p>
                    <p className="about-text"><em>“Too bad! Same old story! Once you’ve finished building your house you notice you’ve accidentally
                    learned something that you really should have known—before you started.” —Friedrich Nietzsche, Beyond Good and Evil</em></p>
                    Always up for a < Link to={'/contact'} > <emphasis>hello</emphasis></Link >.


                </div >
            </>
        )
    }
}

export default About
