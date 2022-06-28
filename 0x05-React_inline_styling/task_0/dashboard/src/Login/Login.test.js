import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Login from './Login';

configure({adapter: new Adapter()});

describe("Testing the <Login /> Component", () => {
	it("Login renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).equal(true);
  });

	it.skip("<Login /> render 2 inputs", () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find('input')).lengthOf(2);
	});

	it.skip("<Login /> render 2 labels", () => {
		const wrapper = shallow(<Login />);
		expect(wrapper.find('label')).lengthOf(2);
	});

});
