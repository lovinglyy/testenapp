import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { withCookies, Cookies } from 'react-cookie';
import PropTypes from 'prop-types';

/**
 * Basic ID number validation.
 * @param  {number} id
 */
const validateID = (id) => {
  if (Number.isNaN(id)) return false;
  if (id < 0 || !Number.isInteger(Number(id))) return false;
  return true;
};

/**
 * Shows a component if there's cookies set for the sessionID,
 * otherwise redirects to '/'.
 * @param  {Component} component Component that would be rendered.
 * @param  {object} cookies A instance of Cookies. See more in https://www.npmjs.com/package/react-cookie.
 */
const PrivateRoute = ({ component: Component, cookies, ...rest }) => (
  <Route
    {...rest}
    render={props => (validateID(cookies.get('sessionID')) ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/',
          state: { from: props.location },
        }}
      />
    ))
        }
  />
);


PrivateRoute.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired,
  component: PropTypes.func.isRequired,
};

export default withCookies(PrivateRoute);
