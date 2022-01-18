import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  ScrollView
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

export default class PersonScreen extends React.Component{
    render() {
  
        return (
         
  
          
            <View>
              <ScrollView >
  
               
                  <View style={{marginTop:50}} >
                    <Text >
                      Name-{this.props.route.params.post.Name}
                    </Text>
                    <Text >
                     Address- {this.props.route.params.post.Address}
                    </Text>
                    <Text >
                      Phone Number-{this.props.route.params.post.PhoneNumber}
                    </Text>
                    <Text >
                      Drive Completed-{this.props.route.params.post.DriveCompleted?'Yes':'No'}
                    </Text>
                   
                   </View>
  
                   <TouchableOpacity style={styles.pickUp}>
                     <Text>PickUp</Text>
                   </TouchableOpacity>
             
              </ScrollView>
            </View>
          
        );
      
    }
  }
  const styles=StyleSheet.create({
    pickUp:{
      marginTop:50,
      justifyContent:'center',
      alignItems:'center',
      borderWidth:2,
      width:100,
      alignSelf:'center'
    }
  })
  