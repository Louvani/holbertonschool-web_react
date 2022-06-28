import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotificationItem from './NotificationItem';

configure({adapter: new Adapter()});

describe("Testing <NotificationItem /> Component", () => {

	let wrapper;

	it("<NotificationItem /> is rendered without crashing", () => {
		wrapper = shallow(<NotificationItem shouldRender />);
		expect(wrapper).to.not.be.an("undefined");
	});
});
