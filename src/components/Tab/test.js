/* eslint-disable no-undef */

import 'react-native';
import React from 'react';
import Tab from './Tab';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Tab />);
});
