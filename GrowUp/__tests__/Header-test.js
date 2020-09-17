/**
 * @format
 */

import 'react-native';
import React from 'react';
import Header from '../components/Header';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Header />);
});

it('should match snapshot', () => {
  const result = renderer.create(<Header />).toJSON();
  expect(result).toMatchSnapshot();
});

it('renders header', () => {
  renderer.create(<Header />);
  expect(Header.defaultProps.title).toBe("GrowUp!");
});
