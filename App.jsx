import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigations/StackNavigation';
import BottomTab from './src/navigations/BottomTab';
import {Provider} from 'react-redux';
import store from './src/redux/Store';
import {useSelector} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </Provider>
  );
}

const AuthNavigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return isLoggedIn ? <BottomTab /> : <StackNavigation />;
  
};

export default App;
