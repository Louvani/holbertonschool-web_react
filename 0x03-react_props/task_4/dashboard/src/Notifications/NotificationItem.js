import { Fragment } from "react";
import React from 'react';

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

export default NotificationItem;
