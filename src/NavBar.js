import React from 'react';

const NavBar = (props) => {
    return (
        <div >
        <ul className="navBar">
            <li onClick={() => props.navClick("Home")}>Home</li>
            <li onClick={() => props.navClick("Parity")}>Parity</li>
            <li onClick={() => props.navClick("Unscramble")}>Unscramble</li>
            <li onClick={() => props.navClick("AdventchureTyme")}>AdventureTyme</li>
           
        </ul>
    </div>
    );
};

export default NavBar;