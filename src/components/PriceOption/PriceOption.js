import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const PriceOption = ({ option }) => {
    return (
        <div>
            <div className='bg-indigo-300 m-4 p-6 rounded-md'>
                <h2>
                    <span className='text-8xl'>{option.price}</span>
                    <span className='text-2xl'>/month</span>
                </h2>
                <p className='text-3xl'>{option.name}</p>
                <div className='flex items-center'>
                    <CheckCircleIcon className="h-6 w-4 text-purple-800" />
                    <p className='ml-2'>Awosome Features</p>
                </div>
            </div>

        </div>
    );
};

export default PriceOption;