import React, { useEffect, useState } from 'react';

function CreatePost(props) {
    const [postBody, setPostBody] = useState('');

    const createPost = async () =>{
        const postURL = 'http://localhost:4000/post';
        const formData = {
            body: postBody
        };
        const reqParams = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            },
            body: JSON.stringify(formData)
        };
        const response = await fetch(postURL, reqParams);
        const responseData = await response.json();
        if (responseData.error){
            console.log('error');
        }else if (responseData.success){
            console.log(responseData.success)
        }else{
            console.log('error 2')
        }
    }

  return (
    <div className='create-post-container'>
        <textarea value={postBody} onChange={(e) => setPostBody(e.target.value)} placeholder="What's on your mind?"></textarea>
        <button onClick={() => createPost()}>Post</button>
    </div>
  )
}

export default CreatePost;
