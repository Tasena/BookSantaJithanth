import React from 'react';
import BookDonate from '../Screens/BookDonateScreen';
import Request from '../Screens/RequestScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { DrawerItems } from 'react-navigation-drawer'
import { View ,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from 'firebase';

export default class SideBar extends React.Component{
   

    render(){
        return(
            <View>
                <View>
                    <DrawerItems 
                    {...this.props}
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("welcomeScreen");
                        firebase.auth().signOut();
                    }}>
                         <Text>LOG OUT</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        );

        
    }
}
