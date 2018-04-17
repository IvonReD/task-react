import React, { Component } from 'react';

class Navigation extends Component {
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
            <a href="" className="text-white">
             {/* cambio dinamicamente se utiliza los props */} 
             { this.props.titulo }
             <span className="badge badge-pill badge-light ml-2">
              {/* { this.state.todos.length } */}
              </span>
             
            </a>
            </nav>

        )
             
    }
}

export default Navigation;