import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from './src/pages/login/index';
import AdminScreen from './src/pages/AdminScreen/AdminScreen';
import HomeScreen from './src/pages/HomeScreen/HomeScreen';
import TeacherScreen from './src/pages/TeacherScreen/TeacherScreen';
import Tarefas from './src/pages/HomeScreen/Tarefas';
import Horarios from './src/pages/HomeScreen/Horarios';
import Chat from './src/pages/HomeScreen/Chat';
import Financeiro from './src/pages/HomeScreen/Financeiro';


export type RootStackParamList = {
  Login: undefined;
  AdminScreen: undefined;
  HomeScreen: undefined;
  TeacherScreen: undefined;
  Tarefas: undefined;
  Horarios: undefined;
  Chat: undefined;
  Financeiro: undefined;
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
        <Stack.Screen name="Horarios" component={Horarios}/>
        <Stack.Screen name="Chat" component={Chat}/>
        <Stack.Screen name="Financeiro" component={Financeiro}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}