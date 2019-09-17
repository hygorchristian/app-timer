import React, { useState, useEffect } from 'react';
import { getTasks } from '~/services/firebase';

import { Container, ListaProjetos } from './styles';
import ProjectItem from '~/components/ProjectItem';

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks(list => setTasks(list));
  }, []);

  return (
    <Container>
      <ListaProjetos>
        {tasks.map(task => (
          <ProjectItem project={task} />
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
