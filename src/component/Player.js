import React, {useState, useEffect, useRef} from 'react'



function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if(isPlaying){
            audioEl.current.play();
        }else{
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards = true) => {
        if(forwards){
            props.setCurrentSongIndex(()=> {
                let temp = props.currentSongIndex;
                temp++;

                if(temp > props.songs.length - 1) {
                    temp = 0;
                }
                return temp;
            });
        }else{
            props.setCurrentSongIndex(()=> {
                let temp = props.currentSongIndex;
                temp--;

                if(temp < 0) {
                    temp = props.songs.length - 1;
                }
                return temp;
            });
        }
    }
    return (
        <div className="c-player"> 
            <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}  autoplay></audio>
            
            
        
             
            
        </div>
    )
}

export default Player