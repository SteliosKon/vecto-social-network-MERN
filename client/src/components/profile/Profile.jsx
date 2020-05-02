import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//GIF
import Spinner from '../layout/Spinner';
//Actions
import { getProfileById } from '../../actions/profile';
// import auth from '../../reducers/auth';
//Components
import ProfileTop from './ProfileTop.jsx';
import ProfileAbout from './ProfileAbout.jsx';
import ProfileEducation from './ProfileEducation.jsx';
import ProfileExperience from './ProfileExperience.jsx';

//instead of props.match we use destructure to match

const Profile = ({ match, getProfileById, profile: { profile }, auth }) => {
  useEffect(
    () => {
      getProfileById(match.params.id);
    },
    [getProfileById,match.params.id],
    
  );

  return (
    <Fragment>
      {profile === null || profile.loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <section className='container'>
          <Link to='/profiles' className='btn btn-light'>
            Back To Profiles
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/edit-profile' className='btn btn-dark'>
                Edit Profile
              </Link>
            )}
          <div className='profile-grid my-1'>
            {/* Top */}
            <ProfileTop profile={profile} />
            {/* About */}

            <ProfileAbout profile={profile} />

            {/* Experience */}
            <div className='profile-exp bg-white p-2'>
              <h2 className='text-primary'>Experience</h2>
              {profile.experience.length > 0 ? (
                <Fragment>
                  {' '}
                  {profile.experience.map((exp) => (
                    <ProfileExperience experience={exp} key={exp._id} />
                  ))}
                </Fragment>
              ) : (
                <Fragment>
                  <h4>No experience added yet...</h4>
                </Fragment>
              )}
            </div>

            <div className='profile-edu bg-white p-2'>
              <h2 className='text-primary'>Education</h2>
              {profile.education.length > 0 ? (
                <Fragment>
                  {' '}
                  {profile.education.map((edu) => (
                    <ProfileEducation education={edu} key={edu._id} />
                  ))}
                </Fragment>
              ) : (
                <Fragment>
                  <h4>No education added yet...</h4>
                </Fragment>
              )}
            </div>
          </div>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
