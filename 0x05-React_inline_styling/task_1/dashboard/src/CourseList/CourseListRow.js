import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({isHeader, textFirstCell, textSecondCell}) => {
	const styles = {
		backgroundColor: '',
	}
	if (isHeader) {
		styles.backgroundColor = '#deb5b545';
		if (textSecondCell == null) {
			return (
				<tr style={styles}>
					<th colSpan={2}>{textFirstCell}</th>
				</tr>
			);
		} else {
			return (
				<tr style={styles}>
					<th>{textFirstCell}</th>
					<th>{textSecondCell}</th>
				</tr>
			);
		}
	}
	styles.backgroundColor = '#f5f5f5ab';
	return (
		<tr style={styles}>
			<td>{textFirstCell}</td>
			<td>{textSecondCell}</td>
		</tr>
	);
}

CourseListRow.protoTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};

export default CourseListRow;
