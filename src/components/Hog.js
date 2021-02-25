import React from 'react'

export default class Hog extends React.Component {
    constructor(){
        super()

        this.state = {
            showInfo: false
        }
    }

    handleClick = () => {
        // console.log('hello')
        this.setState({
            showInfo: !this.state.showInfo
        })
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
    
    render(){
        // console.log(this.props)
        const { hog, img } = this.props
        
        return(
            <div className="ui card pigTile" onClick={this.handleClick}>
                <div className="ui image">
                    <img src={img} ></img>
                </div>
                <div className="content">
                    <h3>{hog.name}</h3>
                </div>
                {this.state.showInfo ? this.renderDetails(hog) : null}
            </div>
            
        )
    }
}