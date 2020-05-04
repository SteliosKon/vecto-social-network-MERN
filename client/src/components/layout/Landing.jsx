import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// CSS
import '../../App.css';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large primary">Vecto</h1>
            <blockquote className="blockquote">
              <p className="mb-0">
                It's the not the Destination, It's the journey.
              </p>
              <footer className="blockquote-footer">Ralph Waldo Emerson</footer>
            </blockquote>
            <div className="buttons">
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
              <Link to="/register" className="btn btn-light">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
Landing.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
