import React from 'react';

import { Link } from 'react-router-dom';

import './header.styles.css';

import { FiBookOpen } from 'react-icons/fi';

const Header = () => {

    return(
        <div className = 'main-header'>
            <Link className = 'logo-container' to = '/'>
                BookerDB 
                <div className = 'logo'><FiBookOpen /></div>
            </Link>
            <div className = 'options'>
                <Link className = 'option' to = '/contact'>
                    CONTACT
                </Link>
                <Link className = 'option' to = '/contact'>
                   SIGN IN
                </Link>
                <Link className = 'option' to = '/signin'>
                    ABOUT US
                </Link>

            </div>

        </div>
    )
}

export default Header;