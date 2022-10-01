import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12 p-4 hover:text-pink-600'>
            <a href={route.path}> {route.name} </a>
        </li>
    );
};

export default Link;