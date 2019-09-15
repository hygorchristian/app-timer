import React, { useState, useEffect } from 'react';

import {
  Container,
  ListaProjetos,
  ProjetoContainer,
  ProjetoNome,
  Slider,
  ProjectInfo,
  ProjectAction,
  ProjectControl,
  Atual,
  Restante,
  Tempo,
  Info,
  Money,
} from './styles';
import { formatMilisseconds } from '~/utils/date';

function Project({ time, valueHour, title }) {
  const [ellapsed, setEllapsed] = useState(0);
  const [atual, setAtual] = useState('');
  const [restante, setRestante] = useState('');
  const [money, setMoney] = useState('');

  const valorMilis = valueHour / 60 / 60 / 1000;

  const max = time * 60 * 60000;
  const start = Date.now();

  /* eslint-disable */
  useEffect(() => {
    const interval = setInterval(() => {
      const time = Date.now() - start;
      if(time <= max){
        setEllapsed(time);
        setAtual(formatMilisseconds(time))
        setRestante(formatMilisseconds(max - time))
        setMoney((valorMilis * time).toFixed(2))
      }else{
        setEllapsed(time);
        clearInterval(interval)
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <ProjetoContainer>
      <ProjectInfo>
        <Info>
          <ProjetoNome>{title}</ProjetoNome>
          <Tempo>
            <Atual>+ {atual}</Atual>
            <Restante>- {restante}</Restante>
            <Money>R$ {money}</Money>
          </Tempo>
        </Info>
        <ProjectControl>
          <ProjectAction />
        </ProjectControl>
      </ProjectInfo>
      <Slider value={ellapsed} maximumValue={max} />
    </ProjetoContainer>
  );
}

function Home() {
  return (
    <Container>
      <ListaProjetos>
        <Project title={"Projeto 1"} time={2} valueHour={35}/>
        <Project title={"Projeto 2"} time={0.5}valueHour={50} />
      </ListaProjetos>
    </Container>
  );
}

Home.defaultProps = {
  tabLabel: {
    label: 'Home',
    icon: 'home',
  },
};

export default Home;
