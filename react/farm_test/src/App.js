import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header.js'
import './App.css';

import Home from './components/pages/Home'
import DeviceCommands from './components/pages/DeviceCommands'
import About from './components/pages/About'
import {v4 as uuid} from 'uuid'

class App extends Component {  
  state = {
    todos: [
      {
        id: uuid(),
        title: "milk",
        completed: false
      },
      {
        id: uuid(),
        title: "bread",
        completed: false
      },
      {
        id: uuid(),
        title: "eggs",
        completed: false
      },
    ]
  }

  toggleTodo = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    }) })
  }

  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id 
      !== id)] });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render(){
    // console.log(this.state.todos)
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/commands" component={DeviceCommands} />
            <Route exact path="/about" component={About} />
            
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;