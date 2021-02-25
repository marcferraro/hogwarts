import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./Hogcontainer";
import Filter from './Filter'

class App extends Component {

  constructor(){
    super()
    this.state = {
      hogs: hogs,
      greased: false
    }
  }

  toggleGreased = () => {
    console.log('greasy')
    // this.setState({
    //   greased: !this.state.greased
    // })
    let greasedHogs = []

    if (!this.state.greased){
      greasedHogs = this.state.hogs.filter(hog => {
        // console.log(hog)
        return hog.greased === true
      })
      console.log(greasedHogs)
      this.setState({
        hogs: greasedHogs,
        greased: true
      })
    } else {
      this.setState({
        hogs: hogs,
        greased: false
      })
    }
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <Nav />
        <Filter toggleGreased={this.toggleGreased}/>
        <HogContainer hogs={this.state.hogs}/>
      </div>
      
    );
  }
}

export default App;
