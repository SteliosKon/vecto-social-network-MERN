import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  isAuthenticated, loading ,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated && !loading ? (
        <Redirect to='/login' />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateRoute.propTypes = {
 
  isAuthenticated: PropTypes.bool,
  Loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  
  isAuthenticated: state.auth.isAuthenticated,
  Loading: state.auth.Loading,
});

export default connect(mapStateToProps)(PrivateRoute);
