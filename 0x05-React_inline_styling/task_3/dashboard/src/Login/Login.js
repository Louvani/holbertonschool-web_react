import React, { Fragment } from 'react';
import { StyleSheet, css } from "aphrodite";
// import Hoc from '../HOC/WithLogging';


const Login = () => {
	return (
		<Fragment>
			<div className={css(styles.loginBody)}>
				<p>
					Login to access the full dashboard
				</p>
				<label htmlFor="email">Email:</label>
				<input type="email" id="email" className={css(styles.loginInput)} />
				<label htmlFor="password">Password:</label>
				<input type="password" id="password" className={css(styles.loginInput)} />
				<button>OK</button>
			</div>
		</Fragment>
	);
}

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  loginBody: {
    margin: "50px",
    flexGrow: 1,
    [screenSize.small]: {
      marginTop: "10px",
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
			display: 'flex',
			flexDirection: 'column',
    },
  },

  loginInput: {
    marginLeft: "10px",
    marginRight: "20px",
    [screenSize.small]: {
      display: "block",
      marginLeft: 0,
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
});

export default Login;
