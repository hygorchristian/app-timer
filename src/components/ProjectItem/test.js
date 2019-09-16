/* eslint-disable no-undef */

import 'react-native';
import React from 'react';
import ProjectItem from './ProjectItem';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<ProjectItem />);
});
