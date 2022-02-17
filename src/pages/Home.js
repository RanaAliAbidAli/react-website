import React from 'react';
import banner from '../assests/banner.jpg';
import {Link} from "react-router-dom";
import '../Styles/Home.css';

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${banner})` }}>
            <div className="headerContainer">
                <h1>
                    Welcome To Food Point
                </h1>
                <p>
                    PAKISTANI FOOD AVAILABLE
                </p>

                <Link>
                    <button>
                        Order Now
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home