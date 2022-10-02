import React from 'react';
import { useLoaderData } from 'react-router-dom/dist';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend)
    return (
        <div>
            <h2>Name : {friend.name}</h2>
            <p>Phone : {friend.phone}</p>
            <p>Email : {friend.email}</p>
            <h2>This Is Friend Details Section</h2>
        </div>
    );
};

export default FriendDetails;