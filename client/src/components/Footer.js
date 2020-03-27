import React, { Component } from 'react'
import facebook from '../images/facebook_icon.png'
import github from '../images/github_icon.png'
import linkedin from '../images/Linkedin_icon.png'
export class Footer extends Component {
    render() {
        return (
            <div id="footer-wrapper">
                <a href="facebook.com/paul.phelps.790" alt="facebook link">  <img src={facebook} className="footer-item" /></a>
                <a href="https://github.com/pphelps28" alt="github link"> <img src={github} className="footer-item" /></a>
                <a href="https://www.linkedin.com/in/paul-w-phelps" alt="linkedIn link">  <img src={linkedin} className="footer-item" /></a>
            </div>
        )
    }
}

export default Footer
