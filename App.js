import React from "react";                                                   //using react 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";              //3rd party for navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";  //setting up the navigation stack
// import { createStore, combineReducers } from "redux";                         // redux for state management   
// import { Provider } from "react-redux";                                        //importing reducer 
import Splash from "./screens/Splash";
import Onboarding from "./screens/Onboarding";
import HomePage from "./screens/Homepage";
import Statistics from "./screens/Statistics";
import Profile from "./screens/Profile";
import Add from "./screens/Add";

const Stack = createNativeStackNavigator();                         //initialize stack


// const reducer = combineReducers({
//   // signin: signinReducer,                                            //adding the reducers
//   // story: storyReducer,
// });

//const store = createStore(reducer);                                 //creating redux store

export default function App() {

  return (
    <NavigationContainer>
      {/*<Provider store={store}>
         <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
        </View> */}
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#0077b6" translucent={true} />

      <Stack.Navigator initialRouteName="statistics" screenOptions={{ headerShown: false }}  >
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
      {/* </Provider> */}
    </NavigationContainer>
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
