import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Header from './components/header/header.component';
import {setInitialBest} from './redux/best-seller/best-seller.actions';
import HomePage from './pages/homepage/homepage.component';
import BookList from './components/book-list/book-list.component';


class App extends React.Component{
  constructor(){
    super();

  }


  API_KEY = process.env.NYT_API_KEY

  // bestSellers = async list => { 
  //   const result = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key=${this.API_KEY}`);
  //   const data = await result.json();
  //   console.log(data)
  //   this.setState({theResults: data.results})
  //   this.props.setInitialBest(data.results)
  // }

  render(){
    
  console.log(process.env.NYT_API_KEY)


    return(
      <div>
        <Header />
        <Switch>
        <Route exact path = '/'  render = {props => (
          <HomePage {...props} bestSellers = {this.bestSellers}/>
        )} />
        <Route exact path = '/:book' render = {props => (
          <BookList 
          {...props}
          
          />
        )} />
        
        </Switch>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  setInitialBest: initial => dispatch(setInitialBest(initial)),
});

export default connect(null, mapDispatchToProps)(App);




/*const result = await axios.get(
  `https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key=${this.API_KEY}`
  )
  console.log(result.results)
  this.setState({theResults: result.results})*/ 






















/**
 * https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${this.API_KEY}
 * 
 * https://api.nytimes.com/svc/books/v3/reviews.json?title=Wolves+0f+the+Calla&api-key=${this.API_KEY}
 * 
 * https://api.nytimes.com/svc/books/v3/reviews.json?author=Stephen+King&api-key=${this.API_KEY}
 */





/**https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${this.API_KEY} 
 * 
 * https://api.nytimes.com/svc/books/v3/lists/names.json
*/


/**
 * import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Header from './components/header/header.component';
import {setInitialBest} from './redux/best-seller/best-seller.actions';
import HomePage from './pages/homepage/homepage.component';
import BookList from './components/book-list/book-list.component';
import axios from 'axios';
import { Suspense } from 'react';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      theResults: {}
    }

  }

  componentDidMount(){
    //this.bestSellers()
  }

  API_KEY = 'BHlG8BNyAb8DKwVrsRMtX9qw2d7Xtnat'

  bestSellers = async list => {
    
    const result = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key=${this.API_KEY}`);
    const data = await result.json();
    console.log(data)
    this.setState({theResults: data.results})
    //this.props.setInitialBest(data.results)
  }

  render(){
    console.log(this.state.theResults)
    return(
      <div>
        <Header />
        <Switch>
        <Route exact path = '/' component = {HomePage} />
        <Suspense fallback = {<div>Loading</div>}><Route exact path = '/:book' render = {props => (
          <BookList 
          {...props}
          results = {this.state.theResults}
          bestSellers = {this.bestSellers}
          
          />
        )} />
        </Suspense>
        </Switch>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  setInitialBest: initial => dispatch(setInitialBest(initial)),
});

export default connect(null, mapDispatchToProps)(App);

 */