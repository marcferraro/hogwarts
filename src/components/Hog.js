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
        // if (eventTarget.id === 'hide-hog'){
        //     this.hideHog()
        // } else {
            this.setState({
            showInfo: !this.state.showInfo
            })
        // }
        
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

    // hideHog = (e) => {
    //     e.stopPropagation()
        
    //     console.log('time to hide')
    //     this.setState({
    //         hidden: !this.state.hidden
    //     })
    // }

    // hideTest = (e) => {
    //     e.stopPropagation()
    //     console.log('hide test')
    // }

    // styleCheck = () => {
    //     let hidden
    //     if (this.state.hidden === false){
    //         hidden = "none"
    //     } else {
    //         hidden = ""
    //     }
    //     return hidden
    // }
    
    render(){
        // console.log(this.props)
        const { hog, img } = this.props
        // console.log(hog)
        
        return(
            <div className="ui card pigTile" onClick={(event) => this.handleClick(event.target)}>
                <div className="ui image">
                    <img src={img} alt={`${hog.name} the pig`}></img>
                </div>
                <div className="content">
                    <h3>{hog.name}</h3>
                </div>
                {this.state.showInfo ? this.renderDetails(hog) : null}
                <button onClick={(event) => this.props.hideHog(event, hog)} >Hide Hog</button>
            </div>
            
        )
    }
}

// style={{display: this.state.hidden ? "none" : ""}}
// id="hide-hog"