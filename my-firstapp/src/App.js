import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Wash the utensils",
        completed: false
      },
      {
        id: 2,
        title: "Have breakfast",
        completed: true
      },
      {
        id: 3,
        title: "Go to job direct",
        completed: false
      }
    ]
  }
  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
