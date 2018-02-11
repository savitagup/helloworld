import React, {Component} from 'react';

export default class ToDoItems extends React.Component {
    constructor(){
        super();
        this.state = {
            todoItems : []
        }
    }

    handleClick(){
        const todoItems = this.state.todoItems;
        todoItems.push(this.textbox.value);
        this.setState({
            todoItems : todoItems
        });
    }

    removeClick(todoItems){
        const items = this.state.todoItems;
        items.splice(items.indexOf(todoItems), 1);
        this.setState({
            todoItems : items
        });
    }

    render() {
    return(
        <div className ="App" >
            <input type = "text" ref = {textbox=>this.textbox = textbox}/>
            <button onClick={this.handleClick.bind(this)}>
                Add Item
            </button>
        
            
        
        <p> ToDoItems</p>
        <ul>            
            {this.state.todoItems.map(todoItems=><li> {todoItems} <button onClick={this.removeClick.bind(this,todoItems)}>
                Remove Item
            </button></li>)} 
        </ul>
        </div>
    );
    }
}