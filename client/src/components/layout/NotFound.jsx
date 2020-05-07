import React, { Fragment } from 'react';

const NotFound = () => {
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

export default NotFound;
