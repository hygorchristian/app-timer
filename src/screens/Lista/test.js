/* eslint-disable no-undef */

import 'react-native';
import React from 'react';
import Lista from './Lista';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Lista />);
});
