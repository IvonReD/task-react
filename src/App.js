import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';

// subcomponents
import TodoForm from './components/TodoForm';

import { todos } from './todos.json'
console.log(todos);



class App extends Component {
  // metodo que se ejecuta antes y almacena los datos y hereda la funcionalidad de react
  constructor(){
    super(); //siempre se debe de poner esta linea con un constructor
      this.state = {
        // todos: todos o todos
        todos
      }
  }

  render() {
    console.log('antes de renderizar el componente');
    //recorre el arreglo 
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4">
        <div className="card mt-4">
          <div className="card-header">
            <h3>{todo.title}</h3> 
            <span className="badge badge-pill badge-danger ml-2">
             {todo.priority}

             </span>
           </div>
           <div className="card-body">
            <p> {todo.description}</p> 
            <p> {todo.responsible} </p>
           </div>
  
        </div>
       </div>
      )
    })
    
    return (
      <div className="App">
       <Navigation titulo="Proyecto en React (TASK)"/>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
         
      </div>
    );
  }
}

export default App;
