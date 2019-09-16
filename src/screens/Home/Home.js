/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
import { TimerActions } from '~/store/ducks/timer';

const projects = [
  {
    id: 1,
    name: 'Hans Club',
    valueHour: 35,
    timePerDay: 8,
  },
  {
    id: 2,
    name: 'Sunper SUS',
    valueHour: 35,
    timePerDay: 8,
  },
  {
    id: 3,
    name: 'Consultoria',
    valueHour: 35,
    timePerDay: 8,
  },
];

function Project({ project }) {
  const [ellapsed, setEllapsed] = useState(0);
  const [atual, setAtual] = useState('00:00:00');
  const [restante, setRestante] = useState('00:00:00');
  const [money, setMoney] = useState('0,00');

  const dispatch = useDispatch();
  const timer = useSelector(state => state.timer);

  const valorMilis = project.valueHour / 60 / 60 / 1000;

  const max = project.timePerDay * 60 * 60000;
  const start = Date.now();

  const play = () => {
    if (!timer.isPlaying) {
      dispatch(TimerActions.timerStart());
    }
    dispatch(TimerActions.timerAddProject(project.id));
  };

  const pause = () => {
    dispatch(TimerActions.timerRemoveProject(project.id));
  };

  useEffect(() => {
    if (timer.isPlaying && timer.projectsId.includes(project.id)) {
      const interval = setInterval(() => {
        const time = Date.now() - start;
        if (time <= max) {
          setEllapsed(time);
          setAtual(formatMilisseconds(time));
          setRestante(formatMilisseconds(max - time));
          setMoney((valorMilis * time).toFixed(2));
        } else {
          setEllapsed(time);
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [timer]);

  return (
    <ProjetoContainer>
      <ProjectInfo>
        <Info>
          <ProjetoNome>{project.name}</ProjetoNome>
          <Tempo>
            <Atual>+ {atual}</Atual>
            <Restante>- {restante}</Restante>
            <Money>R$ {money}</Money>
          </Tempo>
        </Info>
        {timer.projectsId.includes(project.id) ? (
          <ProjectControl onPress={pause}>
            <ProjectAction name="pause" />
          </ProjectControl>
        ) : (
          <ProjectControl onPress={play}>
            <ProjectAction name="play-arrow" />
          </ProjectControl>
        )}
      </ProjectInfo>
      <Slider value={ellapsed} maximumValue={max} />
    </ProjetoContainer>
  );
}

function Home() {
  return (
    <Container>
      <ListaProjetos>
        {projects.map(project => (
          <Project project={project} />
        ))}
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
