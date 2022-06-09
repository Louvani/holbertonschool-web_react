import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

import closeIcon from '../assets/close-icon.png';
import './Notifications.css';

function Notifications({ displayDrawer, listNotifications }) {
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
						{listNotifications.length === 0 ? (
							 <li>No new notification for now</li>
						) : (
							listNotifications.map((notification) => {
								return (
									<NotificationItem
										key={notification.id}
										type={notification.type}
										value={notification.value}
										html={notification.html}
									/>
								)
							})
						)}
					</ul>
				</div>
			)}
		</Fragment>
	);
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
	listNotifications : PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
