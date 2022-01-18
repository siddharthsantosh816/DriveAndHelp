import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

export default class PersonCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
         
          post_id:this.props.post.key,
          post_data:this.props.post.value,
         
        };
      }
    
    
    
      render() {
        
        let post=this.state.post_data;
        
      
          return (
            <TouchableOpacity  onPress={
              ()=>{
              
              
                this.props.navigation.navigate("PersonScreen",{"post":post})
              }
            }>
              <View style={{marginTop:50,justifyContent:'center'}} >
    
                <View style={{justifyContent:'center',alignItems:'center',borderWidth:2}} >
                  <Text >
                    {post.Name}
                  </Text>
                  <Text >
                    {post.Address}
                  </Text>
                  
               
              </View>
              </View>
            </TouchableOpacity>
          );
        
      }
    }
    
    