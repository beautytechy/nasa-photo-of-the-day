import React from "react";
import NasaInfo from "../src/NasaInfo"


const NasaCard = props => {
    console.log(props)
    
    return (
        
        <div key={props.id}>
          <h1>Photo Title:{props.date}</h1>
          
             <img src={props.banana} alt="nasa photo"></img>
            
        </div>
    )
}

export default NasaCard