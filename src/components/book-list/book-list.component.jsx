import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import './book-list.styles.css';
import Books from '../books/books.component';
import BookDetails from '../book-details/book-details.component'
import {noMove} from '../../redux/best-seller/best-seller.actions';
import {moveLeft} from '../../redux/best-seller/best-seller.actions';

import {useEffect, useState} from 'react';

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

//import {toShow} from '../../redux/best-seller/best-seller.actions';

const BookList  = ({bestSellers, match, noMove, show, move_left, }) => {
    
    useEffect(() => {
        console.log(match.params.book)
        bestSeller(match.params.book)
        return () => {
            noMove()
        }
    }, [])

    

    let [result, setResult] = useState([])
    let [page, setPage] = useState(1)
    let resPerPage = 5
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;
    let [pages, setPages] = useState(1)

    const API_KEY = process.env.REACT_APP_NYT_API_KEY


    const bestSeller = async list => {
        const result = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key=${API_KEY}`);
        const data = await result.json();
        console.log(data)
        console.log(data.results)
        setResult(data.results)
        setPages(Math.ceil(data.results.books.length / resPerPage)) 
        //this.setState({theResults: data.results})
        //this.props.setInitialBest(data.results)
      }

    const renderResults = () => (
        result.books.slice(start, end).map(el => {
            return(<Books key = {result.books.findIndex(elem => el === elem)} result = {el}  num = {result.books.findIndex(elem => el === elem)}/>)
        })
    )

    const onClick = (type) => {
        if(type === 'prev'){
            setPage(page - 1)
            console.log(page)
        }

    else if(type === 'next'){
            console.log(pages, page)
            setPage(page + 1)
            console.log(page)       
    }
    }
    
      if(result){
    return(
         (<Fragment>
        <div className = 'title'>{result.list_name}</div>
        <div className = 'book-list'>
            <div className = {`first ${move_left ? 'move-left' : null}`}>
                {result.books ? renderResults() : null}
                <div className = 'paginate'>
                    {page > 1 ? (<div className = 'left' onClick = {() => {onClick('prev')}}><FaAngleLeft size = '2x' color = '#ffa949'/></div>) : null}
                    <div className = 'page'>{page}</div>
                    {page + 1 <= pages  ? <div className = 'right' onClick = {() => onClick('next')}><FaAngleRight size = '2x' color = '#ffa949'/></div> : null}
                </div>
            </div>
            
            <div className = {`second ${move_left ? 'move-in' : null}` }>
                <BookDetails />
            </div>
        </div> </Fragment>) 
    )}
}

const mapStateToProps = ({initial}) => ({
    result: initial.initial_best,
    move_left: initial.move_left,
    show: initial.show
})

const mapDispatchToProps = dispatch => ({
    noMove: () => dispatch(noMove()),
    moveLeft: () => dispatch(moveLeft())
})

export default connect(mapStateToProps, mapDispatchToProps)(BookList)













