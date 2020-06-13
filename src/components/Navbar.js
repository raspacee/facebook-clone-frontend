import React, { useEffect, useState } from 'react';

function Navbar(props) {

  return (
    <nav className='navbar'>
        <div className='searchbar-container'>
            <a className='navbar-logo' href="/">f</a>
            <input type='text' className='searchbar' placeholder='Search'/>
            <button className='searchbar-btn' type='submit'>&#128269;</button>
        </div>
        <a href="#">Profile</a>
        <a href="/">Home</a>
        <a href="#">Find Friends</a>
        <a href="#">Friend Requests</a>
    </nav>
  )
}

export default Navbar;
