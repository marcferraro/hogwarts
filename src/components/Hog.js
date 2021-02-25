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
        return(<div>
            <p>{hog.specialty}</p>
            <p>{hog.greased}</p>
            <p>{hog.weight}</p>
            <p>{hog['highest medal achieved']}</p>
        </div>)
    }
    
    render(){
        console.log(this.props)
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