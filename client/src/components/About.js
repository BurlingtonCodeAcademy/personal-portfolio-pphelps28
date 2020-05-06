import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Work from './Work'
class About extends Component {
    render() {
        return (
            <>
                <div id="page-wrapper" className={this.props.animation}>
                    <h1 id="about-heading">This is <a href="https://www.linkedin.com/in/paul-w-phelps/" rel="noopener noreferrer" alt="linkedIn profile" target="_blank"><strong>me</strong></a><img id="mobile-about-image" src={this.props.image} alt="profile" /><br /></h1>
                    <Work />
                    <p id="about-blurb">When I’m not coding away, there’s a 90% chance I’m playing Dungeons and Dragons. If by some miracle it’s not one of the two, I’m cooking with my SO, playing video games, or going for a hike or long run. Not marathon-long, though.  Not again.  Good God, not again. 😅</p>
                    <p className="about-text" ><i style={{ color: '#d68ed6' }}>“Too bad! Same old story! Once you’ve finished building your house you notice you’ve accidentally
                    learned something that you really should have known—before you started.” —Friedrich Nietzsche, Beyond Good and Evil</i></p>
                    Always up for a < Link onClick={this.props.toggleContact} > <emphasis>hello</emphasis></Link >.


                </div >
            </>
        )
    }
}

export default About
