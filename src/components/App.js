import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogContainer from "./Hogcontainer";

class App extends Component {

  constructor(){
    super()
    this.state = {
      hogs: hogs
    }
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <Nav />
        {/* <Filter /> */}
        <HogContainer hogs={this.state.hogs}/>
      </div>
      
    );
  }
}

export default App;
