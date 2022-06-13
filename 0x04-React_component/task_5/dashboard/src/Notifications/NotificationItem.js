import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.props.markAsRead.bind(this);
	}

	render() {
		return (
		<Fragment>
			{
				this.props.html !== undefined &&
				<li
					data-priority-type={this.props.type}
					dangerouslySetInnerHTML={this.props.html}
					// onClick={alert('click'))}
					onClick={this.markAsRead(this.props.id)}
				/>
			}
			{
				this.props.html === undefined &&
				<li
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


export default NotificationItem;
