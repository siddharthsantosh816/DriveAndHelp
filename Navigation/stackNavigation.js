import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './tabNavigation';
import PersonScreen from '../screens/personScreen';

const Stack=createStackNavigator();

const StackNavigator=()=>{
return(


   <Stack.Navigator
   screenOptions={{headerShown:false}}
   initialRouteName='Home'
   >

   <Stack.Screen name="Home" component={BottomTabNavigator} />
   <Stack.Screen name="PersonScreen" component={PersonScreen} />
    
    </Stack.Navigator>
    




)
}

export default StackNavigator;