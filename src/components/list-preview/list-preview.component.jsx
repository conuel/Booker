import React from 'react';

import SmallButton from '../button/button.component';

import './list-preview.styles.css';

class ListPreview extends React.Component{ 
    constructor(){
        super()
    }

    render(){
        console.log(this.props.bestSellers)
        return(
            <div className = 'list-preview'>
                <div className = 'image' 
                style = {{backgroundImage: `url(${this.props.image})`}}
                />
                <SmallButton title = {this.props.title} {...this.props} bestSellers = {this.props.bestSellers} />
                
            </div>
        )
    }
}

export default ListPreview;

/**
 * <div className = 'list-preview' style= {{backgroundImage: `url(${this.props.image})`}}> </div>
 * 
 * <div className = 'image' style = {{backgroundImage: `url(${this.props.image})`}}
                />
 * 
 */