import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Modal, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';
import db from '../config.js'

export default class LoginScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            //jason
            emailId: '',
            password: '',
            confirmPassword: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            isModalVisible: 'false',
            yeet: "YEET"
        }
    }

    userLogin = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.props.navigation.navigate("BookDonate");
                alert("Login Succesful : User Data Succesfully Accuired");
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
               alert(errorMessage)
            })
    }

    userSignUp = (email, password, confirmPassword) => {
        if (password != confirmPassword) {
            alert("Your passwords do not match. Please try again")
        }

        else {

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    db.collection("users").add({
                        firstName: this.state.firstName,
                        lastName: this.state.lastName,
                        address: this.state.address,
                        emailId: this.state.emailId,
                        contactNo: this.state.phoneNumber
                    })
                    alert("Sign Up Succesful : User Data Succesfully Accuired",
                        "", [{
                            text: "ok", onPress: () => this.setState({
                                //jason
                                isModalVisible: false
                            })
                        }]
                    );
                })
                .catch((error) => {
                    alert(error.message)
                })
        }
    }

    showModal = () => {
        return (
            <Modal visible={this.state.isModalVisible}>
                <View>
                    <KeyboardAvoidingView>
                        <Text style={styles.container}>Registration Form</Text>

                        <TextInput
                            placeholder="First Name"

                            onChangeText={(text) => {
                                this.setState({
                                    //jason
                                    firstName: text
                                })
                            }}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Last name"

                            onChangeText={(text) => {
                                this.setState({
                                    //jason
                                    lastName: text
                                })
                            }}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Address"

                            onChangeText={(text) => {
                                this.setState({
                                    //jason
                                    address: text
                                })
                            }}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="Phone"

                            onChangeText={(text) => {
                                this.setState({
                                    //jason
                                    phoneNumber: text
                                })
                            }}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder="thisisntyourfirsttime@gmail.com"
                            keyboardType="email-address"
                            onChangeText={(text) => {
                                this.setState({
                                    //jason
                                    emailId: text
                                })
                            }}
                            style={styles.input}
                        />
                        <TextInput
                            placeholder='thisisntyourfirsttimeeither123'
                            secureTextEntry={true}
                            onChangeText={(text) => {
                                this.setState({
                                    //jason
                                    password: text
                                })
                            }}
                            style={styles.input}
                        />

                        <TextInput
                            placeholder='thisisntyourfirsttimeeither123'
                            secureTextEntry={true}
                            onChangeText={(text) => {
                                this.setState({
                                    //jason
                                    confirmPassword: text
                                })
                            }}
                            style={styles.input}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
                            }}
                            style={styles.button}>
                            <Text>REGISTER</Text>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            this.setState({
                                isModalVisible: false
                            })
                        }} style={styles.button}
                        >
                            <Text>CANCEL</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </View>
            </Modal>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View>

                    <View>
                        {this.showModal()}
                    </View>

                    <Image style={{
                        width: 909,
                        height: 138,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 200

                    }} source={require("../VisualAssets/UI/BSW.png")} />

                    <TextInput
                        placeholder="thisisntyourfirsttime@gmail.com"
                        keyboardType="email-address"
                        onChangeText={(text) => {
                            this.setState({
                                //jason
                                emailId: text
                            })
                        }}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder='thisisntyourfirsttimeeither123'
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({
                                //jason
                                password: text
                            })
                        }}
                        style={styles.input}
                    />

                    <TouchableOpacity onPress={() => {
                        this.userLogin(this.state.emailId, this.state.password)
                    }} style={styles.button}><Image style={{
                        width: 210.5,
                        height: 37.5
                    }} source={require("../VisualAssets/UI/LoginButton.png")} /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        this.setState({
                            isModalVisible: true
                        })
                    }}
                        style={styles.button}><Image style={{
                            width: 210.5,
                            height: 37.5
                        }} source={require("../VisualAssets/UI/SignUpButton.png")} /></TouchableOpacity>
                </View>
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
    }
});
