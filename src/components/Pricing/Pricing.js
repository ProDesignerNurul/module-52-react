import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: 0, features: [
            'Awsome Feature',
            'Faluda Feature',
            'Aluda Feature',
            'Naluda Feature',
            'Baluda Feature',
            'Laluda Feature',
            'Galuda Feature'
        ] },
        { id: 2, name: 'Free', price: 9.99, features: [
            'Awsome Feature',
            'Faluda Feature',
            'Aluda Feature',
            'Naluda Feature',
            'Baluda Feature',
            'Laluda Feature',
            'Galuda Feature'
        ] },
        { id: 3, name: 'Free', price: 19.99, features: [
            'Awsome Feature',
            'Faluda Feature',
            'Aluda Feature',
            'Naluda Feature',
            'Baluda Feature',
            'Laluda Feature',
            'Galuda Feature'
        ] }
    ]
    return (
        <div>
            <h2 className='text-6xl font-bold bg-indigo-300 p-5 mt-4'>Best Deal Of The Town</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-4'>
                {
                    pricingOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;