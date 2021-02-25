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
      greased: false,
      sort: 'default'
    }
  }

  toggleGreased = () => {
    // console.log('greasy')
    // this.setState({
    //   greased: !this.state.greased
    // })
    let greasedHogs = []

    if (!this.state.greased){
      greasedHogs = this.state.hogs.filter(hog => {
        // console.log(hog)
        return hog.greased === true
      })
      // console.log(greasedHogs)
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

  sortHogs = (sortType) => {
    // console.log(sortType)
    let sorted
    switch(sortType){
      case 'default':
        // console.log('default')
        this.setState({
          hogs: hogs,
          sort: 'default'
        })
        break
      case 'name':
        // console.log('name')
        sorted = this.state.hogs.sort((a,b) => a.name > b.name ? 1 : -1)
        this.setState({
          hogs: sorted,
          sort: 'name'
        })
        break
      case 'weight':
        // console.log('weight')
        sorted = this.state.hogs.sort((a,b) => a.weight < b.weight ? 1 : -1)
        this.setState({
          hogs: sorted,
          sort: 'weight'
        })
        break
    }
  }

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <Nav />
        <Filter toggleGreased={this.toggleGreased} sortHogs={this.sortHogs}/>
        <HogContainer hogs={this.state.hogs}/>
      </div>
      
    );
  }
}

export default App;
