import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

configure({adapter: new Adapter()});

describe("Testing the <Notifications /> Component", () => {

	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Notifications />);
	});

	it("<Notifications /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
	});

	it("<Notifications /> renders three list items", () => {
		expect(wrapper.find(NotificationItem)).to.have.lengthOf(0);
	});

	it("<Notifications /> render the text Your notifications", () => {
		expect(wrapper.contains(<div className='menuItem'>Your notifications</div>)).to.equal(true);
	});

});
