// import { faPlay } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Categories from './Categories';
import {Switch, Route} from 'react-router-dom'


const Main= ()=>{
    return(
        <div className="main">
            <div className="upperNav"> My SPACE</div>
              <div className="mainContent">
                    <Switch>
                      <Route path="/" exact component={Categories}></Route>
                      <Route path ="/ search">Recherche</Route>
                      <Route path="/your-library">Votre librairie</Route>
                    </Switch>
                    
              </div>    
         </div>
            
       

    )
}

export default Main;