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
				<label htmlFor="email">Email: </label>
				<input  className={css(styles.loginInput)} type="email" id="email" name="email" />
				<label htmlFor="password">Password: </label>
				<input className={css(styles.loginInput)} type="password" id="password" name="password" />
				<button>OK</button>
			</div>
		</Fragment>
	);
}

const styles = StyleSheet.create({
	loginBody: {
		margin: "50px",
    flexGrow: 1,
	},
	loginInput: {
		marginLeft: '20px',
		marginRight: '20px',
	}
})

export default Login;
