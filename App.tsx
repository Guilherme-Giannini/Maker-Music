import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from './src/pages/login/index';
import AdminScreen from './src/pages/AdminScreen/AdminScreen';
import HomeScreen from './src/pages/HomeScreen/HomeScreen';
import TeacherScreen from './src/pages/TeacherScreen/TeacherScreen';
import Tarefas from './src/pages/HomeScreen/Tarefas';


export type RootStackParamList = {
  Login: undefined;
  AdminScreen: undefined;
  HomeScreen: undefined;
  TeacherScreen: undefined;
  Tarefas: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TeacherScreen" component={TeacherScreen} />
        <Stack.Screen name="Tarefas" component={Tarefas}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}