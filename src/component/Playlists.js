import React from "react"
import { musics } from "./musics";


const Playlists = (props) =>{
    
        return(
            <div className="cardWrapInner">
                {musics.map((playlists,id)  =>(
                    <div className="card" onClick={() => props.setIsPlaying(!props.setIsPlaying)} key={playlists.id}>
                        <div className="cardImage">
                            <img src={playlists.img} alt=""/>
                        </div>    
                        <div className="cardContent">
                            <h3>{playlists.name}</h3> 
                        </div>
                    </div>
                ))}
                
            </div>
        )
}


export default Playlists