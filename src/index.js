import '~/config/ReactotronConfig';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '~/store';
import Main from '~/screens/Main';
import { primary } from '~/utils/colors';

const App = () => {
  StatusBar.setBarStyle('light-content');
  StatusBar.setBackgroundColor(primary);

  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
