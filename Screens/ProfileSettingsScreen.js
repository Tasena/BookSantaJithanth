import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Modal, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';
import db from '../config.js'

export default class ProfileSettings extends React.Component{
    constructor(){
        super();

        this.state ={ 
            //jason
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: '',
            emailId: '',
            docId: ''
            
                    }
    }

    getUserDetails = ()=>{
        var email = firebase.auth().currentUser.email;
        console.log(email)
        db.collection('users').where('emailId', '==', email).get()
        .then((snapshot)=>{
           
            snapshot.forEach((doc)=>{
                var data = doc.data();
                console.log(data);
                this.setState({
                    //jason
                    emailId: data.emailId,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                    phoneNumber: data.contactNo,
                    docId: doc.id
                })
            })
        }) 
    }

    componentDidMount(){
        this.getUserDetails()
    }

    render(){
        return(
            <View style={styles.Maincontainer}>
                <Text style={styles.container}><Image style={{
                    width:444,
                    height: 95
                }}source={require("../VisualAssets/UI/profileSettings.png")}/></Text>
                <KeyboardAvoidingView>
                <TextInput
                        placeholder="First Name" 
                       
                        onChangeText={(text)=>{
                            this.setState({
                                //jason
                                firstName: text
                            })
                        }} 
                        style={styles.input} 
                        value={this.state.firstName}
                        />
                        <TextInput
                        placeholder="Last name" 
                        
                        onChangeText={(text)=>{
                            this.setState({
                                //jason
                                lastName: text
                            })
                        }} 
                        style={styles.input}
                        value={this.state.lastName}              
                        />
                        <TextInput
                        placeholder="Address" 
                        
                        onChangeText={(text)=>{
                            this.setState({
                                //jason
                                address: text
                            })
                        }} 
                        style={styles.input}
                        value={this.state.address}              
                        />
                        <TextInput
                        placeholder="Phone" 
                       
                        onChangeText={(text)=>{
                            this.setState({
                                //jason
                                phoneNumber: text
                            })
                        }}
                        value={this.state.phoneNumber} 
                        style={styles.input}             
                        />

                        <TouchableOpacity style={styles.button}>
                            <Image style={{
                                width:236,
                                height: 78
                            }}
                            source={require("../VisualAssets/UI/saveButton.png")}/>
                        </TouchableOpacity>
                        
                </KeyboardAvoidingView>
                
            </View>
        )
            
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    Maincontainer: {
       
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
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
        width: 410,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }
  });
  