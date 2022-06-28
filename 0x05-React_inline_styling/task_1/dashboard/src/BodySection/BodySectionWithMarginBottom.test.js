import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

configure({adapter: new Adapter()});

test('should render correctly a BodySection component and that the props are passed correctly to the child', () => {
  const wrapper = shallow(
    <BodySectionWithMarginBottom title="testing">
      testing test
    </BodySectionWithMarginBottom>,
  );
  expect(wrapper.find('BodySection')).toHaveLength(1);
  expect(wrapper.find('BodySection').props()).toEqual({
    children: 'testing test',
    title: 'testing',
  });
});
