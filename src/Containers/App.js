import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import uuid from 'uuid';

// Components
import Title from '../Components/Title';
import ToDoForm from '../Components/ToDoForm';
import ToDos from '../Components/ToDos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      error: false
    };
  }

  addTodo = nameOfTodo => {
    this.setState({ error: false });

    if (nameOfTodo && nameOfTodo.trim().length > 0) {
      const newTodoItem = {
        name: nameOfTodo.trim(),
        id: uuid.v4()
      };
      const todos = [...this.state.todos, newTodoItem];

      this.setState({ todos });
    } else {
      this.setState({ error: true });
    }
  };

  removeTodo = id => {
    const remainingTodos = this.state.todos.filter(item => item.id !== id);

    this.setState({
      todos: remainingTodos
    });
  };

  render() {
    const { todos } = this.state;

    return (
      <Fragment>
        <Title />
        <ToDoForm addTodo={this.addTodo} />
        {this.state.error && <small>type in the name!</small>}
        <ToDos todos={todos} removeTodo={this.removeTodo} />
      </Fragment>
    );
  }
}

export default hot(module)(App);
