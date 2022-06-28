import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

configure({adapter: new Adapter()});

describe('Testing the <App /> Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it('should not crash', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).equal(true);
  });

  it('should contain the Notifications component', () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Notifications")).length(1);
  });

  it('should contain the Header  component', () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find('Header')).length(1);
  });

  it('should contain the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Login")).length(1);
  });

  it.skip('should contain the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(" Footer")).length(1);
  });
});

describe('loggin prop is true', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("CourseList is not displayed with isLoggedIn false by default", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("CourseList")).length(0);
  });
  it.skip("isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn />);
    wrapper.update();
    expect(wrapper.find("Login")).length(0);
    expect(wrapper.find("CourseList")).length(1);
  });
});
