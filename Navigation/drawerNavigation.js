import React from 'react'
import StackNavigator from './stackNavigation'
import Profile from '../screens/profile'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Logout from '../screens/Logout'
import Leaderboard from '../screens/leaderBoard'

const Drawer=createDrawerNavigator();
class DrawerNavigator extends React.Component{
    render(){ 
        return(
        
            <Drawer.Navigator screenOptions={{headerShown:false}}>
         
            <Drawer.Screen name="Home" component={StackNavigator}/>
            <Drawer.Screen name="Profile" component={Profile}/>
            <Drawer.Screen name="Leaderboard" component={Leaderboard}/>
            <Drawer.Screen name="Logout" component={Logout}/>
             </Drawer.Navigator>       
         )
    }
}

export default DrawerNavigator;