import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom/dist';
import './Post.css';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div className='post'>
            <h2>Post Title : {title}</h2>
            <p>Post ID : {id}</p>
            <p>Post Body : {body}</p>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Show All Details</button>
        </div>
    );
};

export default Post;