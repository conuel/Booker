import React from 'react';
import { Link } from 'react-router-dom';

import './button.styles.css';

const SmallButton = ({title, list_name}) => {
    
    return(
        <Link to = {`/${list_name}`}>
            <div className = 'small-button' >{title}</div>
            </Link>
    )
}

export default SmallButton

/**
 * <div className = 'small-button'>
            <Link to = {`/${list_name}`}>{title}</Link>
        </div>
 */