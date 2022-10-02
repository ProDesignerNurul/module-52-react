import React from 'react';
import { useLoaderData } from 'react-router-dom/dist';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts)
    return (
        <div>
            <h4>This is my post section, and i will post everyday in this section</h4>
            {
                posts.map(post => <Post
                key={post.id}
                post={post}
                ></Post>)
            }
        </div>
    );
};

export default Posts;