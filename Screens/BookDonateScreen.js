import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class BookDonateScreen extends Component{

  render(){
    return(
      <View style={{flex:1}}>
        
        
                <Text style={{ fontSize: 20}}>List Of All Requested Books</Text>
             
      </View>
    )
  }
}
