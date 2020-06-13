import React, { useEffect, useState } from 'react';
import CreatePost from './CreatePost.js';
import Posts from './Posts.js';

function MainContent(props) {

  return (
    <div className='main-content'>
        <CreatePost token={props.token}/>
        <Posts/>
    </div>
  )
}

export default MainContent;
