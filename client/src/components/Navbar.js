import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div id="header" >
                <div id="navbar-items">
                    <Link onClick={this.props.headerEmphasis} id="home" to={'/'} className="header-item" >{this.props.emphasized == 'home' ? <emphasis className="extra">Home</emphasis> : 'Home'}</Link>
                    <Link onClick={this.props.headerEmphasis} id="about" to={'/about'} className="header-item" >{this.props.emphasized == 'about' ? <emphasis className="extra">About</emphasis> : 'About'}</Link>
                    <Link onClick={this.props.headerEmphasis} id="work" to={'/work'} className="header-item" >{this.props.emphasized == 'work' ? <emphasis className="extra">Work</emphasis> : 'Work'}</Link>
                    <Link onClick={this.props.headerEmphasis} id="play" to={'/play'} className="header-item" >{this.props.emphasized == 'play' ? <emphasis className="extra">Play</emphasis> : 'Play'}</Link>

                </div>
                <div id="contact">
                    <Link to={'/contact'} onClick={this.props.headerEmphasis} id="contact" className="header-item" >{this.props.emphasized == 'contact' ? <emphasis className="extra">Contact</emphasis> : 'Contact'}</Link>
                </div>
            </div >
        )
    }
}

export default Navbar
