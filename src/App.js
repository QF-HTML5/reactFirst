import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './todos'
import NewTodos from './newTodos'
import FirstPage from './pages/FirstPage'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Todos  ></Todos>
          <NewTodos/>
        </header>
        <FirstPage/>
        
      </div>
    );
  }
}

export default App;
