import React from 'react';
import './buy.styles.css';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const Buy = ({links, show}) => {
    console.log(links)
    return(
    <div className = {`links ${show ? 'can-show' : null}`}>{links.map(el => {
        return(
            <Link className = 'book-links' to = {`${el.url}`} key = {links.findIndex(elem => el === elem)}>{el.name}</Link>
        )
    })}</div>
)
}

const mapStateToProps = ({initial}) => ({
    show: initial.show
})

export default connect(mapStateToProps)(Buy);