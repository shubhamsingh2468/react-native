import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import Category from './Category';
import AthleteReport from './Screens/AthleteReport';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
 <NavigationContainer>
      
        <Stack.Navigator>
          <Stack.Screen name='Home' component ={HomeScreen} />
          <Stack.Screen name='AthleteReport' component ={AthleteReport} />

          
        </Stack.Navigator>
      
    </NavigationContainer>
  );
}

