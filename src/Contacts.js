import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Contacts = () => {
    return (
        <div>

            <a href="mailto:Michael.Blatchford@Olympian.org?Subject=Schedule%20a%20meeting">
                <FontAwesomeIcon icon ="envelope" className="contact-icons"  />
            </a>
            <a href="">
                <FontAwesomeIcon icon ="file-pdf" className="contact-icons resume" />
            </a>
            <a href="https://www.linkedin.com/in/mblatchford2008oly">
                <FontAwesomeIcon icon ={['fab',"linkedin"]} className="contact-icons"  />
            </a>
            <a href="https://github.com/mblatchford">
                <FontAwesomeIcon icon ={['fab',"github-square"]} className="contact-icons" />           
            </a>
        </div>
    );
};

export default Contacts;