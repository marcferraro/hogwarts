import React, { Component } from "react";
import Hog from './Hog'
import Babe from '../hog-imgs/babe.jpg'
import Porkchop from '../hog-imgs/porkchop.jpg'
import Cherub from '../hog-imgs/cherub.jpg'
import PiggySmalls from '../hog-imgs/piggy_smalls.jpg'
import Trouble from '../hog-imgs/trouble.jpg'
import Piglet from '../hog-imgs/piglet.jpg'
import Peppa from '../hog-imgs/peppa.jpg'
import TruffleShuffle from '../hog-imgs/truffle_shuffle.jpg'
import Bailey from '../hog-imgs/bailey.jpg'
import GalaxyNote from '../hog-imgs/galaxy_note.jpg'
import LeggoMyEggo from '../hog-imgs/leggo_my_eggo.jpg'
import ag from '../hog-imgs/augustus_gloop.jpg'


const pictureMap = {
  'Babe': Babe,
  'Porkchop': Porkchop,
  'Cherub': Cherub,
  'Piggy smalls': PiggySmalls,
  'Trouble': Trouble,
  'Piglet': Piglet,
  'Peppa': Peppa,
  'Truffle Shuffle': TruffleShuffle,
  'Bailey': Bailey,
  'Galaxy Note': GalaxyNote,
  'Leggo My Eggo': LeggoMyEggo,
  'Augustus Gloop': ag
}


class HogContainer extends Component {

  

  render() {
    const { hogs } = this.props
    
    // console.log(hogs)
    return (
      <div >
        <h1>Hogs</h1>
        <div className="ui three cards grid container">
          {hogs.map(hog => <Hog key={hog.id} hog={hog} img={pictureMap[hog.name]} hideHog={this.props.hideHog}/> )}
        </div>
      </div>
    );
  }
}

export default HogContainer;
