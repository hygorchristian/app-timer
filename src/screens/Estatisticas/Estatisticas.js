import React from 'react';

import { Container } from './styles';

function Estatisticas() {
  return <Container />;
}

Estatisticas.defaultProps = {
  tabLabel: {
    label: 'Estatísticas',
    icon: 'graph',
  },
};

export default Estatisticas;
