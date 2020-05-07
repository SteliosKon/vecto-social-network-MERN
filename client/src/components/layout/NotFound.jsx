import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const NotFound = (props) => {
  return (
    <Fragment>
      <div className="container">
        <h1 className="x-large text-primary">
          <i className="fas fa-exclamation-triangle"></i> Page not found
        </h1>
        <p className="large">Sorry... This page doesn't exist</p>
      </div>
    </Fragment>
  );
};

NotFound.propTypes = {};

export default NotFound;
