import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

import Adapter from 'enzyme-adapter-react-16';
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

test('Testing if the new methods has been correctly called and with specific message', () => {
  console.log = jest.fn();

  const wrapper = shallow(<Notifications />);
  const spy = jest.spyOn(wrapper.instance(), 'markAsRead');
  wrapper.instance().markAsRead(3);
  expect(spy).to.have.been.call();
  expect(console.log).to.have.been.called.with(
    'Notification 3 has been marked as read',
  );

  jest.restoreAllMocks();
});
