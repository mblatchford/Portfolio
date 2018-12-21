import React from 'react';

const NavBar = (props) => {
    return (
        <div >
        <ul className="navBar">
            <li onClick={() => props.navClick("home")}>Home</li>
            <li onClick={() => props.navClick("parity")}>Parity</li>
            <li onClick={() => props.navClick("unscramble")}>Unscramble</li>
            <li onClick={() => props.navClick("adventchureTyme")}>AdventureTyme</li>
           
        </ul>
    </div>
    );
};

export default NavBar;