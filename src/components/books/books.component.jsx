import React from 'react';
import {connect} from 'react-redux';
import './books.styles.css';
import {moveLeft} from '../../redux/best-seller/best-seller.actions';
import {moveItem} from '../../redux/best-seller/best-seller.actions';
import {useState, useEffect} from 'react';



const Books = ({result, moveLeft, num, move_left, moveItem, title}) => {
    let [checkTitle, setCheckTitle] = useState(false)
    let [theNode, setTheNode] = useState(null)

    const finalRes = {...result, num}

    useEffect(() => {
        if(theNode){
            if(title === theNode.title){
            setCheckTitle(true)
        }
        else if(title !== theNode.title){
            setCheckTitle(false)
            console.log(title, theNode.title)
        }}
    }, [title])

    const handleClick = (event) => {
        const res = event.target.closest('.test')
        const resObj = JSON.parse(res.dataset.goto)
        setTheNode(resObj)
        console.log(resObj)
        moveItem(resObj)
        moveLeft();  
    }

    return(
        <div className = {`test ${checkTitle ? 'current' : null}`} onClick = {handleClick} data-goto = {JSON.stringify(finalRes)}>
            <div className = {`num ${move_left ? 'num-x' : null }`}> {num + 1}</div>
            <div className = 'brief'>
                <div className = {`title-1 ${move_left ? 'title-x' : null }`}>Title:&nbsp;{result.title} </div>
                <div className = {`author-1 ${move_left ? 'author-x' : null }`}>Author:&nbsp;{result.author}</div>
                <div className = {`des-1 ${move_left ? 'des-x' : null }`}>Description:&nbsp;<span>{result.description}</span></div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    moveLeft: () => dispatch(moveLeft()),
    moveItem: item => dispatch(moveItem(item))
})

const mapStateToProps = ({initial}) => ({
    move_left: initial.move_left,
    title: initial.title
})

export default connect(mapStateToProps, mapDispatchToProps)(Books);






/**
 * const Books = ({result, moveLeft}) => {
    console.log(result)
    return(
        <div className = 'test' onClick = {moveLeft}>
            <h1>{result.list_name}</h1>
        </div>
    )
}
 */