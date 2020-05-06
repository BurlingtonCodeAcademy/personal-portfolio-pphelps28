import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div id="header" className={this.props.slidein} >
                <div id="navbar-items">
                    <Link onClick={this.props.setPage} id="/home" to={'/'} className="header-item" >{this.props.currentPage === '/' ? <emphasis >Home</emphasis> : 'Home'}</Link>
                    <Link onClick={this.props.setPage} id="/about" to={'/about'} className="header-item" >{this.props.currentPage === '/about' ? <emphasis >About</emphasis> : 'About'}</Link>
                    <Link onClick={this.props.setPage} id="/code" to={'/code'} className="header-item" >{this.props.currentPage === '/code' ? <emphasis >Code</emphasis> : 'Code'}</Link>
                    <Link onClick={this.props.toggleContact} id="contact" className="header-item" >{this.props.currentPage === '/contact' ? <emphasis className="extra">Contact</emphasis> : 'Contact'}</Link>
                    <div id="fine-print-2" >
                        <div>Made with 💓 by Paul Phelps </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Navbar
