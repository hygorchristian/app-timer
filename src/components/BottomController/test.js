/* eslint-disable no-undef */

import 'react-native';
import React from 'react';
import BottomController from './BottomController';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<BottomController />);
});
