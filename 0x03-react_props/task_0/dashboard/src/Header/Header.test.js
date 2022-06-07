import { shallow } from "enzyme";
import Header from './Header';

describe("<Header />", () => {
  it("Header renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("Header renders a 'div' with the class App-header", () => {
    const wrapper = shallow(<Header />);
    wrapper.update();
    expect(wrapper.find("div.App-header")).toHaveLength(1);
  });
})