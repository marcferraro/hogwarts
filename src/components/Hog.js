import React from 'react'

export default class Hog extends React.Component {
    constructor(){
        super()

        this.state = {
            showInfo: false,
            hidden: false
        }
    }

    handleClick = (eventTarget) => {
        // console.log(eventTarget)
        if (eventTarget.id === 'hide-hog'){
            this.hideHog()
        } else {
            this.setState({
            showInfo: !this.state.showInfo
            })
        }
        
    }

    renderDetails = (hog) => {
        const greased = hog.greased ? "True" : "False"
        return(<div>
            <p className="normalText hoggyText">Specialty: {hog.specialty}</p>
            <p className="normalText hoggyText">Greased? {greased}</p>
            <p className="normalText hoggyText">{hog.weight} kg</p>
            <p className="achievementText normalText hoggyText">{hog['highest medal achieved']}</p>
        </div>)
    }

    hideHog = () => {
        console.log('time to hide')
        this.setState({
            hidden: !this.state.hidden
        })
    }

    styleCheck = () => {
        let hidden
        if (this.state.hidden === true){
            hidden = "none"
        } else {
            hidden = ""
        }
        return hidden
    }
    
    render(){
        // console.log(this.props)
        const { hog, img } = this.props
        
        return(
            <div style={{display: this.styleCheck}} className="ui card pigTile" onClick={(event) => this.handleClick(event.target)}>
                <div className="ui image">
                    <img src={img} ></img>
                </div>
                <div className="content">
                    <h3>{hog.name}</h3>
                </div>
                {this.state.showInfo ? this.renderDetails(hog) : null}
                <button id="hide-hog">Hide Hog</button>
            </div>
            
        )
    }
}