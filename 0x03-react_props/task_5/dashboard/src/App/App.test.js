import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

configure({adapter: new Adapter()});

describe("Testing the <App /> Component", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it("<App /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
	});

	it("<App /> contains the <Notifications /> Component", () => {
		expect(wrapper.contains(<Notifications />)).to.equal(true);
	});

	it("<App /> contains the <Header /> Component", () => {
		expect(wrapper.contains(<Header />)).to.equal(true);
	});

	it("<App /> contains the <Login /> Component", () => {
		expect(wrapper.contains(<Login />)).to.equal(true);
	});

	it("<App /> contains the <Footer /> Component", () => {
		expect(wrapper.contains(<Footer />)).to.equal(true);
	});

});

describe('loggin prop is true', () => {
  it('should verify that login componenet in not rendered', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('Login').length).toBe(0);
  });

  it('should verify that courseList componenet is rendered', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('CourseList').length).toBe(1);
  });
});
