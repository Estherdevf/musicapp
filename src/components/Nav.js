
import React from 'react'
import logo from '../images/log.png';
import { ReactComponent as HomeIcon } from "../svgs/home.svg";
import { ReactComponent as SearchIcon } from "../svgs/search.svg"
import { ReactComponent as LibraryIcon } from "../svgs/library.svg"
import { BrowserRouter as Router, Link } from 'react-router-dom'
// import Modal from './Modal'



const Nav = () => {

  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt="ChristMusic" />

      </div>
      <ul>
        <Link to="/">
          <li className="active">
            <HomeIcon />
           Acceuil
        </li>
        </Link>
        <Link to="/search">
          <li>
            <SearchIcon />
           Recherche
        </li>
        </Link>
        <Link to="/your-library">
          <li>
            <LibraryIcon />
          Votre librairie
        </li>
        </Link>
      </ul>


      <div className="pop">
        <ul>
          <li className="new-playlist" >
            <i className="fa fa-plus-circle" />
            <span>New Playlist</span>
          </li>

          {/* <Modal show={state.modal} close={handleModal}>
        <form onSubmit={addPlaylist}>
          <div className="title">New Playlist</div>

          <div className="content-wrap">
            <input
              type="text"
              placeholder="My Playlist"
              ref={playlistRef}
              required
            />
            <br />
            <button type="submit">Create</button>
          </div>
        </form>
      </Modal> */}
        </ul>
      </div>
      {/* <Modal/> */}
    </div>
  )
}

export default Nav;