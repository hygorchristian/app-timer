import React from 'react';

import {
  Container,
  Controllers,
  Button,
  Icon,
  Atual,
  Restante,
  Slider,
} from './styles';

function BottomController() {
  return (
    <Container>
      <Slider value={0.55} />
      <Controllers>
        <Atual>+ 03:28:48</Atual>
        <Button>
          <Icon name="stop" />
        </Button>
        <Button large>
          <Icon large name="pause" />
        </Button>
        <Button>
          <Icon name="shuffle" />
        </Button>
        <Restante>- 04:32:23</Restante>
      </Controllers>
    </Container>
  );
}

export default BottomController;
