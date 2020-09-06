import React, { useState, useEffect } from 'react';
import Showpost from '../ShowPost/ShowPost';

const Post = () => {
    const [post , setPost] = useState([]);
    useEffect(()=>{
        const api = ('https://jsonplaceholder.typicode.com/posts');
        fetch(api)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])


    return (
        <div>
            {
                post.map(pt => <Showpost key={pt.id} post={pt}></Showpost>)
            }
        </div>
    );
};

export default Post;