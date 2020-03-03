import React, { useState } from 'react'
import { Player } from 'video-react';



const Epsisode = props => {

    return (

        <div className="container">
            <p>Choose your seasons</p>
            <div className="row">
          
                {props.season.epasods.map((epasod, index) => (
                    
                    <div key={index} className="col center">
                        <img src={epasod.image} className="card-img-top" alt="Johny" />
                        <Player
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        />
                        <h3>{epasod.title}</h3>
                    </div>
                   
                ))}
            </div>
            
        </div>
    )
}
export default Epsisode


{/* <img src={img} className="card-img-top" alt="Johny" />
<div className="card-body">
    <h5 className="card-title">{props.season.title}</h5>
    <p className="card-text">{props.season.description}</p>
</div>
</div> */}