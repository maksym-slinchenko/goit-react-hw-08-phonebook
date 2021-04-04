import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../navigation';
import UserMenu from '../user-menu/user-menu';
import AuthNav from '../auth-nav';
import AuthSelectors from '../../redux/auth/auth-selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

const AppBar = ({ isAuthenticated }) => (
  <header style={styles.header}>
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: AuthSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
