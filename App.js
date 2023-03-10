import React from "react";                                                   //using react 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";              //3rd party for navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";  //setting up the navigation stack
import store from './src/redux/store.js';
import { Provider } from 'react-redux';
// import { createStore, combineReducers } from "redux";                         // redux for state management   
// import { Provider } from "react-redux";                                        //importing reducer 
import Splash from "./src/screens/Splash";
import Onboarding from "./src/screens/Onboarding";
import HomePage from "./src/screens/Homepage";
import Statistics from "./src/screens/Statistics";
import Profile from "./src/screens/Profile";
import Add from "./src/screens/Add";
import Test from "./src/screens/Test";

const Stack = createNativeStackNavigator();                         //initialize stack

export default function App() {

  return (
    <Provider store={store}>

      <NavigationContainer>

        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#0077b6" translucent={true} />

        <Stack.Navigator initialRouteName="onboarding" screenOptions={{ headerShown: false }}  >
          <Stack.Screen name="test" component={Test} />
          <Stack.Screen name="splash" component={Splash} />
          <Stack.Screen name="onboarding" component={Onboarding} />
          <Stack.Screen name="homepage" component={HomePage} />
          <Stack.Screen name="statistics" component={Statistics} />
          <Stack.Screen name="profile" component={Profile} options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#00b4d8",
            },
            headerShadowVisible: false, // applied here
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'

          }} />
          <Stack.Screen name="add" component={Add} options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#00b4d8",
            },
            headerShadowVisible: false, // applied here
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'

          }} />

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
