import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { formatMilisseconds } from '~/utils/date';
import { getDailyTime } from '~/services/firebase';

import {
  Container,
  Controllers,
  Button,
  Icon,
  Atual,
  Restante,
  Slider,
} from './styles';

const limiteDiario = 10 * 60 * 60 * 1000;

function BottomController() {
  const [tempoDiario, setTempoDiario] = useState(0);
  const [feito, setFeito] = useState('00:00:00');
  const [restante, setRestante] = useState('00:00:00');
  const timer = useSelector(state => state.timer);

  const updateView = time => {
    setFeito(formatMilisseconds(time));
    setRestante(formatMilisseconds(limiteDiario - time));
  };

  useEffect(() => {
    getDailyTime(time => {
      setTempoDiario(time);
      updateView(time);
    });

    if (timer.isPlaying) {
      const interval = setInterval(() => {
        const time = Date.now() - timer.initialTime + tempoDiario;
        updateView(time);
      }, 100);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <Container>
      <Slider value={0.55} />
      <Controllers>
        <Atual>+ {feito}</Atual>
        <Button>
          <Icon name="stop" />
        </Button>
        <Button large>
          <Icon large name="pause" />
        </Button>
        <Button>
          <Icon name="shuffle" />
        </Button>
        <Restante>- {restante}</Restante>
      </Controllers>
    </Container>
  );
}

export default BottomController;
