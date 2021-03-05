import React, { useState, useEffect, useRef } from 'react'
import { musics } from "./musics";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons"



const Playlists = (props) => {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }
    });


    return (
        <div className="cardWrapInner">
            {musics.map((playlists) => {
                // console.log('SONGGGG', playlists.id)
                return (
                    <div className="card" onClick={props.setIsPlaying} key={playlists.id}>
                        <audio src={playlists.src}
                            ref={audioEl} autoPlay key={musics[0].id}></audio>
                        <div className="cardImage">
                            <img src={playlists.img} alt="" />
                        </div>
                        <div className="cardContent">
                            <h3>{playlists.name}</h3>
                            <div className="c-player--controls">
                                <button className="playIcon" onClick={() => setIsPlaying(!props.isPlaying)}>
                                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


export default Playlists
