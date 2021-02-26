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
      hogs: [],
      hiddenHogs: [],
      hiddenToggle: false,
      greased: false,
      sort: 'default'
    }
  }

  componentDidMount(){
    let massagedHogs
    massagedHogs = hogs.map((hog, index) => {
      hog.hidden = false
      hog.id = index + 1
      return hog
    })
    this.setState({
      hogs: massagedHogs
    })
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

  hideHog = (e, hiddenHog) => {
    e.stopPropagation()

    console.log(e.target, hiddenHog)
    // console.log(this.state.hogs)
    const newHogs = this.state.hogs.filter(hog => hog.id !== hiddenHog.id)
    // console.log(newHogs)
    // const 
    // const hogs = 
    // console.log(hog)
    this.setState({
      hogs: newHogs,
      hiddenHogs: [...this.state.hiddenHogs, hiddenHog]
    })
  }

  toggleHiddenHogs = () => {
    console.log(this.state.hiddenHogs)
    this.setState({
      hiddenToggle: !this.state.hiddenToggle
    })
  }

  render() {
    // console.log(this.state)
    // console.log(typeof this.hiddenToggle)
    return (
      <div className="App">
        <Nav />
        <Filter toggleGreased={this.toggleGreased} sortHogs={this.sortHogs} toggleHiddenHogs={this.toggleHiddenHogs}/>
        <HogContainer hogs={this.state.hiddenToggle ? this.state.hiddenHogs : this.state.hogs} hideHog={this.hideHog}/>
      </div>
      
    );
  }
}

export default App;
