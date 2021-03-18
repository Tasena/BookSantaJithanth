import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Modal, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';
import db from '../config.js'

export default class Request extends React.Component{
    constructor(){
        super();
        this.state={
            //jason
            userId: firebase.auth().currentUser.email, 
            bookName: "",
            reason: '',
        } 
    }

    createUniqueId = ()=>{
        return Math.random().toString(36).substring(7);
    }

    addRequest = (bookName, reason)=>{
        db.collection('requestedBooks').add({
            userId : this.state.userId,
            bookName: bookName,
            reason: reason,
            requestId: this.createUniqueId()      
        })

        this.setState({
            bookName: "",
            reason: '',
        })

        alert("Book Request Successful! | Now your address will be sent out to a stranger!")
    }

    render(){
        return(
            <View style={styles.Yeet}>
                <Text style={styles.centerText}><Image style={{
                    width:444,
                    height: 95
                }}source={require("../VisualAssets/UI/RequestBook.png")}/></Text>
                <KeyboardAvoidingView>
                <TextInput
                        placeholder="Which book do you wish to request" 
                       
                        onChangeText={(text)=>{
                            this.setState({
                                //jason
                                bookName: text
                            })
                        }} 
                        value={this.state.bookName}
                        style={styles.input}             
                        />
                        <TextInput
                        multiline
                        numberOfLines={8}
                        placeholder="Why have you chosen to request this book?" 
                        value={this.state.reason}
                        onChangeText={(text)=>{
                            this.setState({
                                //jason
                                reason: text
                            })
                        }} 
                        style={styles.input}             
                        />

                        <TouchableOpacity styles={styles.container} onPress={()=>{
                            this.addRequest(this.state.bookName,this.state.reason);
                        }}>
                        <Image style={{
                    width:210.5,
                    height: 37.5
                }}source={require("../VisualAssets/UI/SubmitButton.png")}/>
                        </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>    
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Yeet: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150
      },
  
    button: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
  
    input: {
        borderWidth: 3
        ,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
        width: 400,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }, 

    centerText:{
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }
  });
  