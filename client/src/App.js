import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Play from './components/Play';
import Background from './components/Background'
import homeImage from './images/home.jpg'
import aboutImage from './images/about.jpg'
import workImage from './images/work.jpg'
import playImage from './images/playPage.svg'

class App extends Component {
  render() {
    return (
      <>
        <Navbar currentPage={this.props.currentPage} highlightHeader={this.props.highlightHeader} setPage={this.props.setPage} />
        <div id="content-area" >
          < Route exact path='/'>
            <Background animation={this.props.panin} image={playImage} />
            <Home animation={this.props.slidein} />
          </Route >
          <Route path='/about'>
            <Background animation={this.props.fadein} image={aboutImage} />
            <About animation={this.props.slideup} />
          </Route>
          <Route path='/work'>
            <Background animation={this.props.rotatein} image={workImage} />
            <Work animation={this.props.fadeout} />
          </Route>
          <Route path='/play'>
            <Background image={homeImage} animation={this.props.fadein}/>
            <Play animation={this.props.slidein}/>
          </Route>
          <Route path='/contact'>
            <Background />

          </Route>

        </div>
      </>
    );
  }
}
export default App;
