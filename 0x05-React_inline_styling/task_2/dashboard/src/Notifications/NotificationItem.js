import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from "aphrodite";

class NotificationItem extends React.PureComponent {
	constructor(props) {
		super(props);
		this.markAsRead = this.props.markAsRead.bind(this);
		this.typeStyle = css(this.props.type === "urgent" ? styles.urgent : styles.default);
	}

	render() {
		return (
		<Fragment>
			{
				this.props.html !== undefined &&
				<li
					className={this.typeStyle}
					data-priority-type={this.props.type}
					dangerouslySetInnerHTML={this.props.html}
					onClick={this.markAsRead(this.props.id)}
				/>
			}
			{
				this.props.html === undefined &&
				<li
				className={this.typeStyle}
					data-priority-type={this.props.type}
					onClick={this.markAsRead(this.props.id)}>
						{this.props.value}
				</li>
			}
		</Fragment>
	)}
}

NotificationItem.propTypes = {
	markAsRead: PropTypes.func,
	id: PropTypes.number,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
		__html: PropTypes.string,
	})
};

NotificationItem.defaultProps = {
  type: 'default',
	markAsRead: function () {},
};

const styles = StyleSheet.create({
  default: {
    color: "blue",
  },

  urgent: {
    color: "red",
  },
});

export default NotificationItem;
