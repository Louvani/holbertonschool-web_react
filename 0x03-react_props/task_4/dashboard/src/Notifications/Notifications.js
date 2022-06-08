import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';

import './Notifications.css';

function Notifications({ displayDrawer }) {
	const styles = {
		background: "transparent",
		border: "none",
		position: "absolute",
		right: 20,
}
	return (
		<Fragment>
			<div className='menuItem'>Your notifications</div>
			{displayDrawer && (
				<div className="Notifications">
					<button style={styles} aria-label="close"
					onClick={() => console.log('Close button has been clicked')}>
						<img src={closeIcon} alt="close-icon" />
					</button>
					<p>
						Here is the list of notifications
					</p>
					<ul>
						<NotificationItem type="default" value="New course available"/>
						<NotificationItem type="urgent" value="New resume available"/>
						<NotificationItem
							type="urgent"
							html={{__html: getLatestNotification()}}
						/>
					</ul>
				</div>
			)}
		</Fragment>
	);
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
