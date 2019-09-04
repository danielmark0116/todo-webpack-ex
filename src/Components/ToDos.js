import React from 'react';
import PropTypes from 'prop-types';

// Components
import ToDo from './Todo';

const ToDos = props => (
  <section>
    <h5>todos</h5>
    <ul>
      {props.todos.map((item, i) => (
        <ToDo
          key={i}
          id={item.id}
          name={item.name}
          removeTodo={props.removeTodo}
        />
      ))}
    </ul>
  </section>
);

ToDos.propTypes = {
  todos: PropTypes.object,
  removeTodo: PropTypes.func
};

export default ToDos;
