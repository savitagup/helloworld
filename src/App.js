import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import biopic from './biopic.jpg';
import request from 'superagent';

import ToDoItems from './ToDoItems.js';

class App extends Component {
  handleClick() {
    alert('Hello I am clicked');
  }
  render() {
    const list = ['Bananas','Cookies','Ice Cream'];
    const now = new Date();
    return (
          <div className ="App" >
                    
            <ToDoItems/>
           <Biography />
           <GroceryList/>
          
           <li>{list[1]}</li>
           
           <p> Map of Grocery List</p>
           <ul>            
             {list.map(list=><li> {list}</li>)}
           </ul>
           
           <body onload="timer = setTimeout('auto_reload()',1000);">
           <ShowDateTime/>
           
           <p>  
             The Date is {now.toTimeString()}
           </p>
           </body>

           <button onClick = {this.handleClick.bind(this)}>
              Click me !!!!!!
           </button>

           
          </div>
    );
    }
  }

class Biography extends React.Component{
  render(){
      return (
        <div >
          
            <img src={biopic} style={{width: 100, height : 100}}/>
            <p>Name : Savita Gupta </p>
            <p>Skill : Java </p>
            <hr />
        </div>
      );
  }

}


class GroceryList extends React.Component{
  render(){
      return (
        <div >
          <h1> Grocery List</h1>
          <ul>
            <li>Banana</li>
            <li>Cookies</li>
            <li>Ice Cream</li>
          </ul>
         
            <hr />
        </div>
      );
  }

}

class ShowDateTime extends React.Component {
  constructor() {
     super();
     this.state = {
       curTime : null
     }
   }
   componentDidMount() {
     setInterval( () => {
       this.setState({
         curTime : new Date().toLocaleString()
       })
     },1000)
   }
  render() {
       return(
         <div>
           <h2>{this.state.curTime}</h2>
           <ShowQuote/>
         </div>
       );
     }
   }


class ShowQuote extends React.Component {
  constructor() {
    super();
    this.state = {
      randomQuote : null,
      author : null
    }
  }
  componentDidMount(){
    request.get('https://talaikis.com/api/quotes/random/').end((error, result)=> {
      this.setState({
        randomQuote: result.body.quote,
        author : result.body.author
      })
    });
  }

  render() {
    return(
      <div>
        <hr />
        <h3>{this.state.randomQuote} --- {this.state.author}</h3>
        <hr />
      </div>
    );
  }
}

export default App;
