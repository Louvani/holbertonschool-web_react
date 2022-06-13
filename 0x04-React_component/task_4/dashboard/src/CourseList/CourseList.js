import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import Hoc from '../HOC/WithLogging';

import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

import './CourseList.css';

const CourseList = ({ listCourses }) => {
	return (
		<table id="CourseList" className="CourseList">
			<thead>
				<CourseListRow textFirstCell="Available courses" isHeader={true} />
				<CourseListRow textFirstCell="Course name" textSecondCell="Credit" />
			</thead>
			<tbody>
				{listCourses.lenggth === 0 ? (
					<tr>
						<td>No course available yet</td>
					</tr>
				) : (
					listCourses.map((course) => {
						return (<CourseListRow
							key={course.id}
							textFirstCell={course.name}
							textSecondCell={course.credit}
							isHeader={false}
						/>)
					})
				)}
			</tbody>
		</table>
	);
}

CourseList.prototypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
}

CourseList.defaultProps = {
	listCourses: [],
}

export default Hoc(CourseList);
