/* eslint-disable no-undef */

import 'react-native';
import React from 'react';
import Estatisticas from './Estatisticas';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Estatisticas />);
});
