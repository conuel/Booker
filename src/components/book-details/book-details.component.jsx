import React from 'react';
import {connect} from 'react-redux';
import './book-details.styles.css';
import Buy from '../buy/buy.component';
import {toShow} from '../../redux/best-seller/best-seller.actions';
import {sendTitle} from '../../redux/best-seller/best-seller.actions';

class BookDetails extends React.Component{
    constructor(){
        super();
        this.state = {

        }
    }


    componentDidUpdate(){
        if( this.props.result) {this.checkMatch(this.props.result.title)}
    }

    checkMatch = (title) => {
        console.log(title.toUpperCase())
        this.props.sendTitle(title.toUpperCase())
    }

    render(){
        const {result} = this.props;
        const myStyle = result ? {
            backgroundImage: `url(${result.book_image})`,
            height: `${result.book_image_height}px`,
            width: `${result.book_image_width}px`
        } : null


        //const {book_image, author, rank, title, buy_links, weeks_on_list, publisher} = result
        
        console.log(result)
        return(
            (result ? 
                <div className = 'main-detail'>
                    <div className = 'detail-image' style = {myStyle}/>
                    <div className = 'others'>
                        <div className = 'like'></div>
                        <button onClick = {() => {this.props.toShow()}} className = 'buy'>Buy</button>
                        <Buy links = {result.buy_links}></Buy>
                   </div>
                    <h1>{result.title}</h1>
                    <p className = 'by'> by </p>
                    <p className = 'auth'>{result.author}</p>
                    <p className = 'descript'>{result.description}</p>
                    <p className = 'publisher'> Publisher:&nbsp;{result.publisher}</p>
                </div>    
            : null )
        
        )
    }
}

const mapStateToProps = ({initial}) => ({
    result: initial.item,
});
const mapDispatchToProps = dispatch => ({
    toShow: () => dispatch(toShow()),
    sendTitle: (title) => dispatch(sendTitle(title)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);

