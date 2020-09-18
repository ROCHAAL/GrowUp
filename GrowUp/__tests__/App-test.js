/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import { shallow, mount } from 'enzyme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render, cleanup} from 'react-native-testing-library';

afterEach(cleanup);

it('renders correctly', () => {
  renderer.create(<App />);
});

it('should match snapshot', () => {
  const result = renderer.create(<App />).toJSON();
  expect(result).toMatchSnapshot();
});

it('can add an item', () =>{
  const rendered = mount(<App />);
  console.log(rendered);
  console.log(rendered.instance());
  const task = rendered.instance().addItem("sweep");
  expect();
})
