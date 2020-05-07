import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
// Components
import Login from '../auth/Login.jsx';
import Register from '../auth/Register.jsx';
import Dashboard from '../dashboard/Dashboard.jsx';
import CreateProfile from '../profile-forms/CreateProfile.jsx';
import EditProfile from '../profile-forms/EditProfile.jsx';
import AddExperience from '../profile-forms/AddExperience.jsx';
import AddEducation from '../profile-forms/AddEducation.jsx';
import Profiles from '../profiles/Profiles.jsx';
import Profile from '../profile/Profile.jsx';
import Posts from '../posts/Posts.jsx';
import NotFound from '../layout/NotFound.jsx';
import PrivateRoute from './PrivateRoute.js';
const Routes = (props) => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route exact path="/create-profile" component={CreateProfile} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <Route component={NotFound}></Route>
      </Switch>
    </Fragment>
  );
};

export default Routes;
