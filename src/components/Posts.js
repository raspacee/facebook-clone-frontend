import React, { useEffect, useState } from 'react';

function Posts(props) {

  return (
    <div className='posts-container'>
        <div className='post'>
            <div className='post-header'>
                <h4 className='post-author'>Bijay Khapung</h4>
                <span className='post-date'>June 6</span>
            </div>
            <div className='post-body'>
                <p className='post-text'>Dummy post text yeah yeah lorem ipsum</p>
            </div>
            <div className='post-footer'>
                <button className='like-btn'>👍 Like</button>
                <input type='text' placeholder='Write a comment...' className='comment'/>
                <button className='comment-btn'>💭 Comment</button>
            </div>
        </div>
    </div>
  )
}

export default Posts;
