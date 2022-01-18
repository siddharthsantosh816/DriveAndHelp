import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GetPicked from '../screens/getPicked';
import PickUp from '../screens/pickUp';
import {NavigationContainer} from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { RFValue } from 'react-native-responsive-fontsize';

const Tab=createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends React.Component{
  
  render(){

    return (
   
      <Tab.Navigator
            barStyle={styles.bottomTabStyle} 
            labeled={false}
            activeColor='orange'
      >
        <Tab.Screen name='Pick Up' component={PickUp} 
        options={{
          tabBarIcon:({color})=>(
            <Ionicons name='library-outline'size={24} color={color} style={styles.icons}></Ionicons>
          ),
          
        }}></Tab.Screen>
         <Tab.Screen name='Get Picked' component={GetPicked} options={{
          tabBarIcon:({color})=>(
           <Ionicons name='newspaper-outline' size={24} color={color} style={styles.icons}></Ionicons>
          )
        }}></Tab.Screen>
      </Tab.Navigator>
    
   );

  }
}



const styles = StyleSheet.create({
  
  icons:{
      width:RFValue(30),
      height:RFValue(30)
  },
  bottomTabStyle:{
    backgroundColor:'grey',
    height:'8%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    position:'absolute',
    overflow:'hidden'
    
  },
});