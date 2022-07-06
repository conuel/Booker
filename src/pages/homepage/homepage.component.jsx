import React from 'react';

import SlideOverview from '../../components/slide-overview/slide-overview.component';
import ListPreview from '../../components/list-preview/list-preview.component';

import './homepage.styles.css';
import bookData from './data'

class HomePage extends React.Component{
    constructor() {
        super();
        
        this.state = {
            list: bookData
        } 
}
    render(){
    const {list} = this.state
    console.log(this.props.bestSellers)
    return(
        <div className = 'homepage'>
            <SlideOverview />
            <div className = 'preview'>
            {
              list.map(el => <ListPreview key = {el.id} {...el} bestSellers = {this.props.bestSellers}/>)
            }
            </div>
        </div>
        
    )
}
    
}

export default HomePage