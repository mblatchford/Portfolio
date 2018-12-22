import React from 'react';

const NavBar = (props) => {
    return (
        <div >
        <ul className="navBar">
            <li onClick={() => props.navClick("home")}>Home</li>
            <li>|</li>
            <li onClick={() => props.navClick("parity")}>Parity</li>
            <li>|</li>
            <li onClick={() => props.navClick("unscramble")}>Unscramble</li>
            <li>|</li>
            <li onClick={() => props.navClick("adventchureTyme")}>AdventureTyme</li>
           
        </ul>
    </div>
    );
};

export default NavBar;