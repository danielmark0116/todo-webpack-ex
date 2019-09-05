import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import titleStyles from '../styles/title.scss';

const Title = props => (
  <Fragment>
    <h1 className={titleStyles.title}>{props.title} aaaaa</h1>
  </Fragment>
);

Title.defaultProps = {
  title: 'Some title'
};

export default Title;
