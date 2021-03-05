import {useState, useEffect} from "react";
import Player from "./components/Player";
import Nav from './components/Nav';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom'
import { musics } from "./components/musics";
import './App.scss';

function App() {
  const [songs] = useState(musics);


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

  return (
    <div className="outerWrap">
      <div className="App">
       <Router>
       <Nav />
        <Main
          // currentSongIndex={currentSongIndex}
          // setCurrentSongIndex={setCurrentSongIndex}
          // nextSongIndex={nextSongIndex}
          // songs={songs}
        />
       </Router>
      </div>
      <div className="musicControls">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
    </div>
    
  );
}

export default App;
