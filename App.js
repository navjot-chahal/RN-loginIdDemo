import React, {useState, useEffect} from 'react';
import {BASE_URL, CLIENT_ID} from '@env';
import RNLoginApi from '@loginid/react-native-sdk';
// import {Text} from 'react-native';
// import {NativeRouter, Route, Switch} from 'react-router-native';
import Home from './views/';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './views/dashboard';

const loginStack = createNativeStackNavigator();
const loggedInStack = createNativeStackNavigator();

const App = () => {
  const [username, setUsername] = useState('');
  const usernameHandler = text => setUsername(text);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log('CLIENT ID:',CLIENT_ID);
    console.log('BASE URL:',BASE_URL);

    RNLoginApi.configure(CLIENT_ID, BASE_URL);// error
  }, []);

  const globalScreenOptions = {
    headerStyle: {
      backgroundColor: '#4287f5',
    },
    headerTitleStyle: {
      color: 'white',
    },
    headerTintColor: 'white',
  };

  return (

    <>
      {loggedIn ?
        <NavigationContainer>
          <loginStack.Navigator screenOptions={globalScreenOptions}>
            <loginStack.Screen name="Dashboard" component={Dashboard} />
          </loginStack.Navigator>
        </NavigationContainer>
      :
        <NavigationContainer>
          <loggedInStack.Navigator screenOptions={globalScreenOptions}>
            <loggedInStack.Screen name="Home" component={Home} />
          </loggedInStack.Navigator>
        </NavigationContainer>
      }
    </>


    // <NativeRouter>
    //   <Switch>
    //     <Route
    //       exact
    //       path="/"
    //       render={() => {
    //         return (
    //           // <Home
    //           //   loginid={RNLoginApi}
    //           //   username={username}
    //           //   usernameHandler={usernameHandler}
    //           // />
    //           <Text>Hello</Text>
    //         );
    //       }}
    //     />
    //     <Route
    //       exact
    //       path="/dashboard"
    //       render={() => {
    //         // return <Dashboard loginid={RNLoginApi} username={username} />;
    //         return <Text >Hello</Text>;
    //       }}
    //     />
    //   </Switch>
    // </NativeRouter>
  );
};

export default App;