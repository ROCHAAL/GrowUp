/**
 * @format
 */

import 'react-native';
import React from 'react';
import Header from '../components/Header';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

//beforeEach(() => {
//  container = document.createElement("View");
//  document.body.appendChild(container);
//});

it('renders correctly', () => {
  renderer.create(<Header />);
});

it('renders header', () => {
  renderer.create(<Header />);
  expect(Header.defaultProps.title).toBe("GrowUp!");
});
