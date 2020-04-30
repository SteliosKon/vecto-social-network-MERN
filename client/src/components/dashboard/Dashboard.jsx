import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//GIF
import Spinner from '../layout/Spinner';

//actions
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

//components
import DashboardActions from './DashboardActions.jsx';
import DashboardExperience from './DashboardExperience.jsx';
import DashboardEducation from './DashboardEducation.jsx';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user'>Welcome {user && user.name}</i>
      </p>
      {profile !== null ? (
        <Fragment>
          <DashboardActions />
          <DashboardExperience experience={profile.experience} />
          <DashboardEducation education={profile.education} />
          <br />
          <br />
          <div className='my-2'>
            <button className='btn btn-danger' onClick={() => deleteAccount()}>
              <i className='fas fa-user-minus'> Delete my account</i>
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>You dont have an account yet!</p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            {' '}
            Create Profile
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
