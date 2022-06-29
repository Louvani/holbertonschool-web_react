import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext, { user, logOut } from './AppContext.js';

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

describe('App states', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("Has default state for displayDrawer false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).equal(false);
  });

  it("displayDrawer changes to true when calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).equal(false);
    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).equal(true);
  });

  it("displayDrawer changes to false when calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).equal(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).equal(true);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).equal(false);
  });

  it("test to verify that the logIn function updates the state correctly", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const loggedUser = {
      email: "paula@louvani.com",
      password: "123456789",
      isLoggedIn: true,
    };

    const instance = wrapper.instance();
    expect(wrapper.state().user).equal(user);
    instance.logIn(loggedUser.email, loggedUser.password);
    expect(wrapper.state().user).contains(loggedUser);
  });

  it("test to verify that the logOut function updates the state correctly", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const loggedUser = {
      email: "paula@louvani.com",
      password: "123456789",
      isLoggedIn: true,
    };

    const instance = wrapper.instance();
    expect(wrapper.state().user).equal(user);
    instance.logIn(loggedUser.email, loggedUser.password);
    expect(wrapper.state().user).contains(loggedUser);
    instance.logOut();
    expect(wrapper.state().user).equal(user);
  });
})
