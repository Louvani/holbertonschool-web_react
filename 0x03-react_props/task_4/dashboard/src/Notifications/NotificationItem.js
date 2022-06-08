import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({type, value, html}) => {
	return (
		<Fragment>
			{
				html !== undefined &&
				<li data-priority-type={type} dangerouslySetInnerHTML={html}/>
			}
			{
				html === undefined &&
				<li data-priority-type={type}>
					{value}
				</li>
			}
		</Fragment>
	)
}

NotificationItem.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
		__html: PropTypes.string,
	})
};

NotificationItem.defaultProps = {
  type: 'default',
};


export default NotificationItem;
