import { shallow } from "enzyme";
import App from "./App";

describe("<App />", () => {
  it("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("App renders a 'header' with the class App-header", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("header.App-header")).toHaveLength(1);
  });
  it("App renders a body with the class App-body", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("body.App-body")).toHaveLength(1);
  });
  it("App renders a footer with the class App-footer", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("footer.App-footer")).toHaveLength(1);
  });
});
