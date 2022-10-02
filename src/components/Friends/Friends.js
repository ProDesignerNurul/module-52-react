import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
    const friends = useLoaderData();
    console.log(friends)
    return (
        <div>
            <h2>My Friends Details : {friends.length}</h2>
        </div>
    );
};

export default Friends;