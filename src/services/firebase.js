import firebase from 'react-native-firebase';
import { getTimeTodayString } from '~/utils/date';

const ref = name => firebase.firestore().collection(name);

export const getTest = callback => {
  ref('teste').onSnapshot(snapshot => {
    const list = [];
    snapshot.forEach(doc => {
      list.push(doc.data());
    });

    callback(list);
  });
};

export const getTasks = callback => {
  ref('tasks')
    .where('ativo', '==', true)
    .onSnapshot(snapshot => {
      const list = [];
      snapshot.forEach(doc => {
        list.push(doc.data());
      });

      callback(list);
    });
};

export const createTask = (data, callback) => {
  ref('tasks')
    .add(data)
    .then(task => {
      updateTask(task.id, {
        id: task.id,
      });
    });
};

export const updateTask = (id, data) => {
  ref('tasks')
    .doc(id)
    .update(data);
};

export const disableTask = id => {
  ref('tasks')
    .doc(id)
    .update({
      ativo: false,
    });
};

export const deleteTask = id => {
  ref('tasks')
    .doc(id)
    .delete();
};

export const saveTaskTime = data => {
  ref('tasks_time')
    .add(data)
    .then(response => {
      updateTaskTime(response.id, {
        id: response.id,
      });
    });
};

export const updateTaskTime = (id, data) => {
  ref('tasks_time')
    .doc(id)
    .update(data);
};

export const getTasksTimeToday = (id, callback) => {
  const today = getTimeTodayString();
  ref('tasks_time')
    .where('date', '==', today)
    .where('project_id', '==', id)
    .onSnapshot(snapshot => {
      let total = 0;

      if (snapshot) {
        snapshot.forEach(doc => {
          const item = doc.data();
          total += item.total;
        });

        callback(total);
      }
    });
};

export const saveDailyTime = data => {
  ref('daily_time').add(data);
};

export const getDailyTime = callback => {
  const today = getTimeTodayString();
  ref('daily_time')
    .where('date', '==', today)
    .onSnapshot(snapshot => {
      let total = 0;

      if (snapshot) {
        snapshot.forEach(doc => {
          const item = doc.data();
          total += item.total;
        });
      }

      callback(total);
    });
};
