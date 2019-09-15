import React from 'react';

import { Container } from './styles';

function Configuracoes() {
  return <Container />;
}

Configuracoes.defaultProps = {
  tabLabel: {
    label: 'Configurações',
    icon: 'settings',
  },
};

export default Configuracoes;
