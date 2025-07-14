import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ParksScreen from './screens/ParksScreens';
import SharedRoutesScreen from './screens/SharedRoutesScreen';
import SavedRoutesScreen from './screens/SavedRoutesScreen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Parks" component={ParksScreen} />
        <Tab.Screen name="Routes" component={SharedRoutesScreen} />
        <Tab.Screen name="Saved Routes" component={SavedRoutesScreen} options={{ title: "Saved Routes" }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
