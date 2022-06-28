import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";
// import Hoc from '../HOC/WithLogging';

import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

import closeIcon from '../assets/close-icon.png';

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

	shouldComponentUpdate(nextProps) {
    if (nextProps.listNotifications.length <= this.props.listNotifications.length)  {
      return false;
    }
    return true;
  }

	render() {
		return (
			<Fragment>
				<div className={css(style.menuItem)}>Your notifications</div>
				{this.props.displayDrawer && (
					<div className={css(style.notifications)}>
						<button
							style={styles} aria-label="close"
							onClick={() => console.log('Close button has been clicked')}
						>
								<img className={css(styles.notificationsButtonImage)} src={closeIcon} alt="close-icon" />
						</button>
						<p className={css(styles.notificationsP)}>Here is the list of notifications</p>
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

const cssVars = {
  mainColor: "#e01d3f",
};

const style = StyleSheet.create({
  menuItem: {
    textAlign: "right",
		margin: '15px',
  },

  notifications: {
    border: `2px dotted ${cssVars.mainColor}`,
    padding: "6px 12px",
		position: 'absolute',
		top: 30,
		right: 0,
		width: '35%',
		fontSize: '16px',
		zIndex: 10,
  },

  notificationsButtonImage: {
    width: "10px",
  },

  notificationsP: {
    margin: 0,
    marginTop: "15px",
  },
});

export default Notifications;
