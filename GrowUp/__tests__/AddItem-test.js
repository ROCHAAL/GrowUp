/**
 * @format
 */

import 'react-native';
import React from 'react';
import AddItem from '../components/AddItem';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<AddItem />);
});

it('should match snapshot', () => {
  const result = renderer.create(<AddItem />).toJSON();
  expect(result).toMatchSnapshot();
});

it('has placeholder text', () => {
  renderer.create(<AddItem />);
  const wrapper = '<View />'
  expect(wrapper.find('AddItem').at(0).props().placeholder).toEqual('Add Task...')
});

//it('can add an item', () =>{
//  renderer.create(<AddItem />);
//  AddItem.addItem("sweep");
//  expect(items.text).
//})
