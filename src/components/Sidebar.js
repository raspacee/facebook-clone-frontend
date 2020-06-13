import React, { useEffect, useState } from 'react';

function Navbar(props) {

  return (
    <aside className='sidenav'>
        <a href='#'>✡ Name here</a>
        <a href='#' className='sidenav-active'>📰 News Feed</a>
        <a href='#'>🙍 Friend Lists</a>
        <a href='#'>☀ Weather</a>
        <a href='#'>⏲ Memories</a>
        <a href='#'>🌟 Recommendations</a>
        <a href='#'>📁 Saved</a>
    </aside>
  )
}

export default Navbar;
