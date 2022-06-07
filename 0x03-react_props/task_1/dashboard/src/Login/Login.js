import React, { Fragment } from 'react';
import './Login.css';

function Login() {
  return (
    <Fragment>
      <p>Login to access the full dashboard</p>
        <span>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <button>OK</button>
        </span>
    </Fragment>
  )
}

export default Login;
