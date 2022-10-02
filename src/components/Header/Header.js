import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <Link to='/home'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/friends'>Friends</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/about'>About</Link>
            </nav>
            <div>
                <h3>Alltime Showing</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi magni totam, porro veritatis atque iste nam non beatae odio earum!</p>
                <div>
                    <ol>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae quas sit vitae cum placeat, adipisci hic veritatis mollitia minus possimus debitis consequuntur sunt obcaecati, fugiat praesentium cupiditate incidunt tenetur.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae quas sit vitae cum placeat, adipisci hic veritatis mollitia minus possimus debitis consequuntur sunt obcaecati, fugiat praesentium cupiditate incidunt tenetur.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae quas sit vitae cum placeat, adipisci hic veritatis mollitia minus possimus debitis consequuntur sunt obcaecati, fugiat praesentium cupiditate incidunt tenetur.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae quas sit vitae cum placeat, adipisci hic veritatis mollitia minus possimus debitis consequuntur sunt obcaecati, fugiat praesentium cupiditate incidunt tenetur.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et repudiandae quas sit vitae cum placeat, adipisci hic veritatis mollitia minus possimus debitis consequuntur sunt obcaecati, fugiat praesentium cupiditate incidunt tenetur.
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Header;