import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

export default function ProtectedRoute({ user, children, ...rest }) {
    return user?React.cloneElement(children, { user }): <Navigate
    to={{
      pathname: ROUTES.LOGIN,
      state: { from: window.location }
    }}
  />;
  }
ProtectedRoute.propTypes={
    user : PropTypes.object,
    children: PropTypes.object.isRequired
};