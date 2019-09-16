/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { getTest } from '~/services/firebase'

import {
  Container,
  ListaProjetos
} from './styles';
import ProjectItem from '~/components/ProjectItem';

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

function Home() {
  useEffect( async () => {
    getTest(lista => {
      console.tron.log(lista)
    })
  }, [])

  return (
    <Container>
      <ListaProjetos>
        {projects.map(project => (
          <ProjectItem project={project} />
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
