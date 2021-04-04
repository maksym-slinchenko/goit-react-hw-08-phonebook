import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import AppBar from './components/app-bar/app-bar';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import './App.css';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <>
        <AppBar />
        <Suspense
          fallback={
            <Loader type="Bars" color="#00BFFF" height={80} width={80} />
          }
        >
          <Switch>
            <PublicRoute
              path="/register"
              redirectTo="/contacts"
              restricted
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              redirectTo="/contacts"
              restricted
              component={LoginView}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsView}
            />
            <Route path="/" component={HomeView} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

const mapDispatchToProps = { onGetCurrentUser: authOperations.getCurrentUser };

export default connect(null, mapDispatchToProps)(App);
