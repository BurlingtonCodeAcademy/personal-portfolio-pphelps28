import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div id="header" className={this.props.slidein} >
                <div id="navbar-items">
                    <Link onClick={this.props.setPage} id="/home" to={'/'} className="header-item" >{this.props.currentPage === '/' ? <emphasis >Home</emphasis> : 'Home'}</Link>
                    <Link onClick={this.props.setPage} id="/about" to={'/about'} className="header-item" >{this.props.currentPage === '/about' ? <emphasis >About</emphasis> : 'About'}</Link>
                    <Link onClick={this.props.setPage} id="/work" to={'/work'} className="header-item" >{this.props.currentPage === '/work' ? <emphasis >Work</emphasis> : 'Work'}</Link>
                    <Link onClick={this.props.setPage} id="/play" to={'/play'} className="header-item" >{this.props.currentPage === '/play' ? <emphasis >Play</emphasis> : 'Play'}</Link>
                    <Link onClick={this.props.toggleContact} id="contact" className="header-item" >{this.props.currentPage === '/contact' ? <emphasis className="extra">Contact</emphasis> : 'Contact'}</Link>

                </div>
            </div >
        )
    }
}

export default Navbar
