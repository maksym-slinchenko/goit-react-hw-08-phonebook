const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserMail = state => state.auth.user.email;

const authSelector = { getIsAuthenticated, getUserMail };

export default authSelector;
