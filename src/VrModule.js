import React, { Component } from 'react';
import './VrModule.css'
// import aframe from 'aframe'

class VrModule extends Component
{
    render()
    {
        return(
            console.log(this.props.inputs),

            <div className="vrModule">
                <a-scene className="vrModule__scene">
                {
                    this.props.inputs.map((input) => {
                        return <a-box position="0 5 0" depth="0.2" width={input.length} height="10" rotation="0 45 0" color="#4CC3D9"></a-box>
                    })
                }
                <a-box color="black" height="0.2" width="30" depth="30" position="0 0 0"></a-box>
                {/* <a-entity supercraft-loader="name: icky-snake"></a-entity> */}
                <a-entity camera look-controls orbit-controls="target: 0 1.6 -0.5; minDistance: 0.5; maxDistance: 180; initialPosition: 0 5 15"></a-entity>
                </a-scene>
            </div>
        )
    }
}

export default VrModule;

