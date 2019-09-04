import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class ToDoForm extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  resetInput = () => {
    this.setState({
      input: ''
    });
  };

  render() {
    const { input } = this.state;

    return (
      <Fragment>
        <h3>Add Todo Form</h3>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.props.addTodo(input);
            this.resetInput();
          }}
        >
          <input
            type="text"
            onChange={this.handleInput}
            name="input"
            value={input}
            autoComplete="off"
          />
        </form>
        <button
          onClick={() => {
            this.props.addTodo(input);
            this.resetInput();
          }}
        >
          Add todo
        </button>
      </Fragment>
    );
  }
}

ToDoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default ToDoForm;
