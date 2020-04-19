import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class About extends Component {
    render() {
        return (
            <>
                <div id="page-wrapper" className={this.props.animation}>
                    <h1 id="about-heading">This is <a href="https://www.linkedin.com/in/paul-w-phelps/" rel="noopener noreferrer" alt="linkedIn profile" target="_blank"><strong>me</strong></a>.<img id="mobile-about-image" src={this.props.image} alt="profile" /><br /></h1>
                    <p className="about-text ">
                        <i>I'm a career changer.</i>
                    </p>
                    <p className="about-text">And I'm currently adapting to a new industry.
                    With the help of <a href="https://burlingtoncodeacademy.com/" alt="burlington code academy home page" target="_blank" rel="noopener noreferrer"><emphasis>Burlington Code Academy</emphasis></a> and expansive programming communities, I've honed and will continue to hone my skills, and expand my vocabulary.  <br /> </p>
                    <p className="about-text"> It's not easy, and I make plenty of mistakes, but every day I learn something, even if it's how little I actually know. That being said, that learning is quick and frequent.  It's like my favorite quote from a book I've never read says:</p>
                    <p className="about-text" ><i style={{ color: '#d68ed6' }}>“Too bad! Same old story! Once you’ve finished building your house you notice you’ve accidentally
                    learned something that you really should have known—before you started.” —Friedrich Nietzsche, Beyond Good and Evil</i></p>
                    Always up for a < Link onClick={this.props.toggleContact} > <emphasis>hello</emphasis></Link >.


                </div >
            </>
        )
    }
}

export default About
