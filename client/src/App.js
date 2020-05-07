//React
import React, { Fragment, useEffect } from 'react';
//Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//
//Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
// Components
import Navbar from './components/layout/Navbar.jsx';
import Landing from './components/layout/Landing.jsx';
import Alert from './components/layout/Alert.jsx';
import Routes from './components/routing/Routes';
//Action
import { loadUser } from './actions/auth';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <br />
          <br />
          <Alert />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
