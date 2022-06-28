import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Footer from './Footer';

configure({adapter: new Adapter()});

describe("Testing the <Footer /> Component", () => {
	it("Footer renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).equal(true);
  });

	it.skip("Verify that the components at the very least render the text “Copyright”", () => {
    const wrapper = shallow(<Footer />);
    wrapper.update();
    expect(wrapper.find("p")).length(1);
    expect(wrapper.find(".footer p").text()).toContain("Copyright");
  });
});
