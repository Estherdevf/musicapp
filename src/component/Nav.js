
import React from 'react'
import logo from '../images/log.png';
import {ReactComponent as HomeIcon} from "../svgs/home.svg";
import{ReactComponent as SearchIcon} from "../svgs/search.svg"
import{ReactComponent as LibraryIcon} from"../svgs/library.svg"
import{Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt=""/>
       
      </div>
      <ul>
        <Link to="/">
        <li className="active">
          <HomeIcon/>
           Acceuil
        </li>
        </Link>
        <Link to="/search">
        <li>
          <SearchIcon/>
           Recherche
        </li>
        </Link>
        <Link to="/your-library">
        <li>
          <LibraryIcon/>
          Votre librairie
        </li>
        </Link>
      </ul>
    </div>
       )
      }

 export default Nav;