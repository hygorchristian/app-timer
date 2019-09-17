import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksTimeToday } from '~/services/firebase';

import {
  ProjetoContainer,
  ProjectInfo,
  Info,
  ProjetoNome,
  Tempo,
  Atual,
  Restante,
  Money,
  ProjectControl,
  ProjectAction,
  Slider,
} from './styles';

import { formatMilisseconds, getTimeTodayString } from '~/utils/date';
import { TimerActions } from '~/store/ducks/timer';
import { ProjectTimeActions } from '~/store/ducks/ProjectTime';

function ProjectItem({ project }) {
  const [inicio, setInicio] = useState(null);
  const [fim, setFim] = useState(null);
  const [timeDone, setTimeDone] = useState(0);

  const [ellapsed, setEllapsed] = useState(0);
  const [atual, setAtual] = useState('00:00:00');
  const [restante, setRestante] = useState('00:00:00');
  const [money, setMoney] = useState('0,00');

  const dispatch = useDispatch();
  const timer = useSelector(state => state.timer);

  const valorMilis = project.valueHour / 60 / 60 / 1000;

  const max = project.timePerDay * 60 * 60000;

  const play = () => {
    dispatch(TimerActions.timerAddProject(project.id));
    setInicio(Date.now());
  };

  const pause = () => {
    dispatch(TimerActions.timerRemoveProject(project.id));
    const fimMilis = Date.now();
    setFim(fimMilis);

    const data = {
      project_id: project.id,
      inicio,
      fim: fimMilis,
      total: fimMilis - inicio,
      valor: (fimMilis - inicio) * valorMilis,
      date: getTimeTodayString(),
    };

    dispatch(ProjectTimeActions.projectTimeSaveRequest(data));
  };

  const updateView = time => {
    setEllapsed(time);
    setAtual(formatMilisseconds(time));
    setRestante(formatMilisseconds(max - time));
    setMoney((valorMilis * time).toFixed(2));
  };

  useEffect(() => {
    if (timer.isPlaying && timer.projectsId.includes(project.id)) {
      const interval = setInterval(() => {
        const time = Date.now() - inicio + timeDone;
        updateView(time);
      }, 100);
      return () => clearInterval(interval);
    }

    getTasksTimeToday(project.id, time => {
      setTimeDone(time);
      updateView(time);
    });
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

export default ProjectItem;
