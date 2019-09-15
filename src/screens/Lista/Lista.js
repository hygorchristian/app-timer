import React from 'react';

import { Container } from './styles';

function Lista() {
  return <Container />;
}

Lista.defaultProps = {
  tabLabel: {
    label: 'Detalhes',
    icon: 'list',
  },
};

export default Lista;
