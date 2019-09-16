import firebase from 'react-native-firebase';

const testeRef = firebase.firestore().collection('teste');

export const getTest = callback => {
  testeRef.onSnapshot(snapshot => {
    const list = [];
    snapshot.forEach(doc => {
      list.push(doc.data());
    })

    callback(list);
  });
};

export const getProjectTimeToday = callback => {

}
