import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  FlatList
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase";
import PersonCard from "./personCard";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

export default class PickUp extends React.Component{

    constructor(){
        super();
        this.state={posts:[]}
    }
     fetchPosts=()=>{
         firebase
         .database()
         .ref("/posts/")
         .on("value",(snapshot)=>{
             var posts=[];
             if(snapshot.val()){
                 Object.keys(snapshot.val()).forEach(function (key){
                     posts.push({
                        key:key,
                        value:snapshot.val()[key]
                     })
                 })
                 this.setState({posts:posts})
             }
         }),function errorObject(){
            console.log("Read Failed :"+errorObject.code)
          } 

     }
     componentDidMount(){
      
        this.fetchPosts()
    }
    renderItem = ({ item: post }) => {
        return <PersonCard post={post} navigation={this.props.navigation}/>;
      };
      
    render(){
      
            return(
               
             <View>
                  
                  {
                    !this.state.posts[0]?
                    <View >
                      <Text >No Posts Available</Text>
                      </View>
                    
                    :
                    <View >
                    <FlatList
                      keyExtractor={this.keyExtractor}
                      data={this.state.posts}
                      renderItem={this.renderItem}
                     />
                   </View>
                   
                   }
                 
                 </View>
                 )
        
       
    }
}