//React
import React, { Fragment, useEffect } from 'react';
//Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/routing/PrivateRoute.jsx';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
// Components
import Navbar from './components/layout/Navbar.jsx';
import Landing from './components/layout/Landing.jsx';
import Alert from './components/layout/Alert.jsx';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import CreateProfile from './components/profile-forms/CreateProfile.jsx';
import EditProfile from './components/profile-forms/EditProfile.jsx';
import AddExperience from './components/profile-forms/AddExperience.jsx';
import AddEducation from './components/profile-forms/AddEducation.jsx';
import Profiles from './components/profiles/Profiles.jsx';
import Profile from './components/profile/Profile.jsx';
import Posts from './components/posts/Posts.jsx';

//Action
import { loadUser } from './actions/auth';
// CSS
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar></Navbar>
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <Route exact path='/create-profile' component={CreateProfile} />
              <Route exact path='/profiles' component={Profiles} />
              <Route exact path='/profile/:id' component={Profile} />
              <PrivateRoute exact path='/posts' component={Posts} />
              <PrivateRoute
                exact
                path='/edit-profile'
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path='/add-experience'
                component={AddExperience}
              />
              <PrivateRoute
                exact
                path='/add-education'
                component={AddEducation}
              />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
