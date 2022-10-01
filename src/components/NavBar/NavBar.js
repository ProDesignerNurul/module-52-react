import React, { useState } from 'react';
import Link from './Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 1, name: 'Products', path: '/Products' },
        { id: 1, name: 'Orders', path: '/Orders' },
        { id: 1, name: 'Contact', path: '/Contact' },
        { id: 1, name: 'About', path: '/About' }
    ]
    return (
        <nav className='w-full bg-purple-300'>
            <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden bg-purple-300">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>

            
            <ul className={`md:flex justify-center absolute md:static duration-200 bg-purple-300 w-full ease-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;