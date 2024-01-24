import React from 'react';
import Topbar from './TopBar'
import InfoBar from './InfoBar'

const Header = () =>{
    return(
        <div className='header'>
          <Topbar/>
          <InfoBar/>
        </div>
    )

}

export default Header;