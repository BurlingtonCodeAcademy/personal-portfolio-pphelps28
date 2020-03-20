import React, { Component } from 'react';
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Work from './components/Work'
import './App.css';
import { Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerEmphasis: 'home'
    }


  }
  headerEmphasis = (event) => {
    console.log(event.target.className)
    this.setState({ headerEmphasis: event.target.id })
  }


  render() {
    return (
      <>
        <div id="background-layer"></div>
        <Navbar headerEmphasis={this.headerEmphasis} emphasized={this.state.headerEmphasis} />
        <div id="content-area">
          < Route exact path='/'>
            <Home />
          </Route >
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/work'>
            <Work />
          </Route>
          <Route path='/play'>

          </Route>
          <Route path='/contact'>

          </Route>

        </div>
      </>
    );
  }
}
export default App;
