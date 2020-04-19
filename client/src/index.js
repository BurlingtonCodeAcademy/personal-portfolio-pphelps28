import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

class Router extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slideup: '',
            slidein: '',
            panin: '',
            rotatein: '',
            fadein: '',
            fadeout: '',
            rotate: '',
            visibility: 'hidden'
        }
    }
    // Lifecycle
    componentDidMount = () => {
        //sets state animations so they trigger on load
        this.setState(
            {
                slideup: 'slideup', slidein: 'slidein', panin: 'panin', rotatein: 'rotatein', fadein: 'fadein', fadeout: 'fadeout', rotate: 'rotate'
            })

        window.onpopstate = this.browserButtonHandler
        if (window.performance) {
            if (performance.navigation.type === 1) {
                this.setState({ currentPage: window.location.pathname })
            }
        }
    }
    toggleContact = () => {
        this.state.visibility === 'hidden' ? this.setState({ visibility: 'visible' }) : this.setState({ visibility: 'hidden' })
    }
    sendContact = () => {
        alert('message sent! (this is a lie)')
        this.setState({ sentMessageVisibility: 'visible' })
    }
    //removes animations so they will re-trigger on next render
    componentWillUnmount = () => {
        this.setState({ slideup: '', slidein: '', panin: '', rotatein: '', fadein: '', fadeout: '', rotate: '' })
    }

    componentDidUpdate = () => {
        if (this.state.currentPage !== window.location.pathname) {
            this.setState({
                currentPage: window.location.pathname,
            })
        }

    }
    //Non-native methods
    browserButtonHandler = (event) => {
        this.setState({
            currentPage: event.target.location.pathname
        })
    }
    setPage = (event) => {
        this.setState({ currentPage: event.target.id })
    }
    //Where it happens
    render() {
        return (
            <div id="main">
                <BrowserRouter>
                    <App
                        slidein={this.state.slidein}
                        slideup={this.state.slideup}
                        panin={this.state.panin}
                        rotatein={this.state.rotatein}
                        fadein={this.state.fadein}
                        fadeout={this.state.fadeout}
                        rotate={this.state.rotate}
                        currentPage={this.state.currentPage}
                        visibility={this.state.visibility}
                        setPage={this.setPage}
                        toggleContact={this.toggleContact}
                        sendContact={this.sendContact}

                    />
                </BrowserRouter>
            </div>
        )
    }
}

ReactDOM.render(<Router />, document.getElementById('root'));
