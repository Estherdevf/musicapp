import {useState, useEffect} from 'react';
import './App.scss';
import Nav from './component/Nav';
import Main from './component/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faForward, faBackward } from "@fortawesome/free-solid-svg-icons"
import Player from'./component/Player'


function App(props) {
   const [songs] = useState([
     {  
         "id":1,
         "category_id":1,
         "title": 'I testify',
         "artist": 'ADA',
         "img": 'ada.jpg',
         "src": './musics/ADA_I_TESTIFY.mp3'
         
     },
       {
         "id":2,
          "category_id":2,
         "title": 'Overcame',
        "artist": 'ADA',
        "img": 'https://happypeople.africa/wp-content/uploads/2018/04/ada-ehi-3.jpg',
        "src": './musics/ADA_overcame.mp3'
       },
       {  
         "id":3,
         "category_id":3,
         "title": 'AYO LAGO',
         "artist": 'CECILIA',
         "img": 'https://i.ytimg.com/vi/KZ3YJ2wNYQM/maxresdefault.jpg',
         "src": './musics/Cecilia Marfo.mp3'
     }
      ]);

   const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);


    useEffect(() => {
     setNextSongIndex(() => {
       if(currentSongIndex + 1 > songs.length - 1) {
         return 0;
       }
       return currentSongIndex + 1;
     });
   }, [currentSongIndex]);
     console.log(currentSongIndex)

  return (
    <div className="outerWrap">
       <div className="App">
         <Nav />
         <Main /> 
        </div>
        
        <>
            <div className="musicControls">
            <button className="skip-btn">
                <FontAwesomeIcon icon={faBackward}  onClick={() => props.SkipSong(false)}/>
            </button>
            <button className="play-btn" onClick={() => props.setIsPlaying(!props.isPlaying)}>
                <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
            </button>
            <button className="skip-btn" onClick={() => props.SkipSong()}>
                <FontAwesomeIcon icon={faForward} />
            </button>

            <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
            </div>
            
        </>
    </div>
  );
}

export default App;
