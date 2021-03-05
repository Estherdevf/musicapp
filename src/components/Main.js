import React, {useState, useEffect, useRef} from 'react'
import Categories from './Categories';
import { Switch, Route } from 'react-router-dom'


const Main = (props) => {
  // const audioEl = useRef(null);
  // const [musc] = useState(props);
  // const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(() => {
  //     console.log(musc)
  // });
  return (
    <div className="main">
      <div className="upperNav"> ChristMusic</div>
      <div className="mainContent">
      {/* {console.log(props)} */}
        
        <Switch>
          <Route path="/" exact component={Categories}></Route>
          <Route path="/ search">Recherche</Route>
          <Route path="/your-library">Votre librairie</Route>
        </Switch>
      </div>
    </div>

  )
}

export default Main;