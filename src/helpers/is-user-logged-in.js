import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';


export default function IsUserLoggedIn({ user, loggedInPath,children, ...rest }) {
    return !user?React.cloneElement(children, { user }): <Navigate
    to={{
      pathname: loggedInPath,
      state: { from: window.location }
    }}
  />;
  }
  IsUserLoggedIn.propTypes={
    user : PropTypes.object,
    loggedInPath: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
};