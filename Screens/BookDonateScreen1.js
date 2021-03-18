import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class BookDonateScreen extends Component{
  constructor(){
    super()
    this.state = {
      userId  : firebase.auth().currentUser.email,
      requestedBooksList : []
    }
  this.requestRef= null
  }

  getRequestedBooksList =()=>{
    this.requestRef = db.collection("requestedBooks")
    .onSnapshot((snapshot)=>{
      var requestedBooksList = snapshot.docs.map((doc) => doc.data())
      this.setState({
        requestedBooksList : requestedBooksList
      });
    })
  }

  componentDidMount(){
    this.getRequestedBooksList()
  }

  componentWillUnmount(){
    this.requestRef();
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.book_name}
        subtitle={item.reason_to_request}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
            <TouchableOpacity 
              onPress ={()=>{
                this.props.navigation.navigate("RecieverDetails",{"details": item})
              }}
              >
              <Text style={{color:'#ffff'}}>View</Text>
            </TouchableOpacity>
          }
        bottomDivider
      />
    )
  }

  render(){
    return(
      <View style={{flex:1}}>
        
        <View style={{flex:1}}>
          {
            this.state.requestedBooksList.length === 0
            ?(
              <View>
                <Text style={{ fontSize: 20}}>List Of All Requested Books</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.requestedBooksList}
                renderItem={this.renderItem}
              />
            )
          }
        </View>
      </View>
    )
  }
}












/*
import React from 'react';
import { Text, View, Flatlist } from 'react-native';
import firebase from 'firebase';
import db from '../config.js'
import { ListItem } from 'react-native-elements'

export default class BookDonate extends React.Component{
    constructor(){
        super();

        this.state = {
            //jason
            userId: firebase.auth().currentUser.email,
            requestedBookList : [], 
        }

        this.requestRef = null; 
    }

    getRequestedBooks = ()=>{
        this.requestRef = db.collection('requestedBooks')
        .onSnapshot((snapshot)=>{
            var requestedBookList = snapshot.docs.map((doc)=>
                doc.data()
            )
            this.setState({
                //jason
                requestedBookList:requestedBookList
            })
        })
    }

    keyExtractor = (item, index)=>{
        index.toString();
    }

    renderItem = ({item, i})=>{
        return(
            <ListItem
                key={i}
                title={item.bookName}
                subtitle={item.reason}
                bottomDivider
            />
        )
    }

    componentDidMount(){
        this.getRequestedBooks();
    }



    render(){
        return(
            <View>
                
                <Text>Donate Screen</Text>
            </View>
        );
    }
}





 <View>
                    {
                        this.state.requestedBookList.length == 0
                        ?(
                            <View>
                                <Text>Nothing, they all got robbed. I wonder why?</Text>
                            </View>
                        )

                        :(
                            <Flatlist 
                                data={this.state.requestedBookList}
                                keyExtractor={this.keyExtractor}
                                renderItem={this.renderItem}
                            />
                        )
                    }
                </View>


*/