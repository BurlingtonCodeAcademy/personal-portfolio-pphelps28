import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
// import Work from './components/Work'
import Code from './components/Code'
import Play from './components/Play';
import Contact from './components/Contact'
import Background from './components/Background'
import Footer from './components/Footer'
import homeImage from './images/home.svg'
import aboutImage from './images/About.jpg'
import workImage from './images/work.svg'
import playImage from './images/play.svg'

class App extends Component {
  render() {
    return (
      <>
        <Contact toggleContact={this.props.toggleContact} visibility={this.props.visibility} sendContact={this.props.sendContact} />
        <Navbar currentPage={this.props.currentPage} highlightHeader={this.props.highlightHeader} setPage={this.props.setPage} toggleContact={this.props.toggleContact} />
        <Footer />
        <div id="content-area" >
          < Route exact path='/'>
            <Background animation={this.props.panin} image={homeImage} />
            <Home animation={this.props.slidein} />
          </Route >
          <Route path='/about'>
            <Background animation={this.props.fadein} image={aboutImage} />
            <About animation={this.props.slideup} image={aboutImage} toggleContact={this.props.toggleContact} />
          </Route>
          <Route path='/code'>
            <Background animation={this.props.rotate} image={workImage} />
            <Code animation={this.props.slidein} />
          </Route>
          <Route path='/play'>
            <Background animation={this.props.rotate} image={playImage} />
            <Play animation={this.props.slidein} />
          </Route>
        </div>
      </>
    );
  }
}
export default App;
