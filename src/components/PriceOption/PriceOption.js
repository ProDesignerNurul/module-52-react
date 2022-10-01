import React from 'react';
import Feature from '../Feature/Feature';


const PriceOption = ({ option }) => {
    const { features } = option;
    return (
        <div>
            <div className='bg-indigo-300 m-4 p-6 rounded-md'>
                <div>
                    <h2>
                        <span className='text-8xl'>{option.price}</span>
                        <span className='text-2xl'>/month</span>
                    </h2>
                    <p className='text-3xl'>{option.name}</p>
                </div>


                {
                    features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                    ></Feature>)
                }
                <button className='bg-green-500 w-full rounded-md py-2 text-white font-bold mt-4'>Buy Now</button>
            </div>
        </div>
    );
};

export default PriceOption;