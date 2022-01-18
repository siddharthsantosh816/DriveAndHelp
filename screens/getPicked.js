import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import firebase from 'firebase';

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

export default class GetPicked extends React.Component{
constructor(){
    super()
    this.state={name:"",address:"", mobile:"",image:""}    
}
uploadDetails=()=>{
    const {name,address,mobile}=this.state;
    if(name&&address&&mobile){
       const data={
           'Name':name,
           'Address':address,
           'PhoneNumber':phone,
           'DriveCompleted':false
       }
       
       firebase
       .database()
       .ref('/posts/'+Math.random().toString(36).slice(2))
       .set(data)
       .then(function (snapshot){
       
           ToastAndroid.show('Request Uploaded!',ToastAndroid.SHORT)
           
       })
        
    }
    else{
        alert('Enter all details!')
    }
}

    render(){
        return(
           <View>
               <TextInput placeholder="Enter Name"
               onChangeText={(text)=>{
                   this.setState({
                       name:text
                   })
               }}
               ></TextInput>
               <TextInput placeholder="Enter Address"
                onChangeText={(text)=>{
                    this.setState({
                        adress:text
                    })
                }}></TextInput>
               <TextInput placeholder="Enter Mobile No"
                onChangeText={(text)=>{
                    this.setState({
                        mobile:text
                    })
                }}></TextInput>

                <TouchableOpacity>
                    <Text>Upload a Picture</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.uploadDetails}>
                    <Text>Submit</Text>
                </TouchableOpacity>

           </View>
            
        )
    }
}