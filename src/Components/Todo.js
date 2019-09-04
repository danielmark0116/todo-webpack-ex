import React from 'react';
import PropTypes from 'prop-types';

// import titleStyles from '../styles/title.scss';

const ToDo = props => (
  <li key={props.key}>
    <span>{props.name}</span>
    <button onClick={() => props.removeTodo(props.id)}>delete</button>
  </li>
);

ToDo.propTypes = {
  key: PropTypes.number,
  id: PropTypes.number,
  name: PropTypes.string
};

export default ToDo;
