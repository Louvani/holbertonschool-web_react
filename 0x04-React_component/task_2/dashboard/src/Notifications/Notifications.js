import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

import closeIcon from '../assets/close-icon.png';
import './Notifications.css';

const styles = {
	background: "transparent",
	border: "none",
	position: "absolute",
	right: 20,
}

class Notifications extends React.Component {
	constructor(props) {
		super(props);
	}

	markAsRead(id) {
		return function () {
			console.log(`Notification ${id} has been marked as read`);
	 }
  }

	render() {
		return (
			<Fragment>
				<div className='menuItem'>Your notifications</div>
				{this.props.displayDrawer && (
					<div className="Notifications">
						<button
							style={styles} aria-label="close"
							onClick={() => console.log('Close button has been clicked')}
						>
								<img src={closeIcon} alt="close-icon" />
						</button>
						<p>Here is the list of notifications</p>
						<ul>
							{this.props.listNotifications.length === 0 ? (
								<li>No new notification for now</li>
							) : (
								this.props.listNotifications.map((notification) => {
									return (
										<NotificationItem
											markAsRead={this.markAsRead}
											id={notification.id}
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
	}
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
	listNotifications : PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
