import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contacts = () => {
    return (
        <div>
            <FontAwesomeIcon icon ="envelope" className="contact-icons" fixedWidth size="3x"/>
            <FontAwesomeIcon icon ="file" className="contact-icons" fixedWidth size="3x"/>
            <FontAwesomeIcon icon ={['fab',"linkedin"]} className="contact-icons" fixedWidth size="3x" />
            <FontAwesomeIcon icon ={['fab',"github-square"]} className="contact-icons" fixedWidth size="3x"/>           
        </div>
    );
};

export default Contacts;