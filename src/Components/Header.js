import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header () {
    const navigate = useNavigate();
    const click = id => () => {
        navigate(`/${id}`);
      }
    return (
        <header className="header">
            <h1>BloomTech Eats</h1>
            <nav>
                <button className="navButton" onClick={click('')}>Home</button>
                <button className="navButton" onClick={click('help')}>Help</button>
            </nav>
        </header>
    )
}

export default Header;