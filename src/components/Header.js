import React, {useState} from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from '@mui/material';
import { Link } from "react-router-dom";

const Header = () => {
    const [inputSearch, setInputSearch] = useState('');

  return (
    <div className='header'>
        <div className='header__left'>
            <MenuIcon />
            <img className="header-logo" src="https://upload.wikimedia.org/wikipedia/id/thumb/b/b5/Youtube_Logo_2005.png/250px-Youtube_Logo_2005.png" alt="" />
        </div>
        <div className='header__input'>
            <input onChange={(e) => setInputSearch(e.target.value)}
             value={inputSearch}
             type="text"
             placeholder="Search" />
            <Link to={`/search/${inputSearch}`}>
                <SearchIcon className='header__inputButton' />
            </Link>
        </div>
        <div className='header__icons'>
            <VideoCallIcon className='header__icon'/>
            <AppsIcon className='header__icon'/>
            <NotificationsIcon className='header__icon'/>
            <Avatar src="https://avatars.githubusercontent.com/u/33003383?v=4" />
        </div>  
    </div>
  )
}

export default Header