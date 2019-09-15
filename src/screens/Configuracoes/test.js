/* eslint-disable no-undef */

import 'react-native';
import React from 'react';
import Configuracoes from './Configuracoes';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Configuracoes />);
});
