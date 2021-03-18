import React from 'react';
import BookDonate from '../Screens/BookDonateScreen';
import Request from '../Screens/RequestScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';


export const AppTabNavigator = createBottomTabNavigator({
    
    BookDonate: {
        //jason
        screen: BookDonate,
        navigationOptions: {
            tabBarLabel: "Donate"
        }

    },

    Request: {
        //jason
        screen: Request,
        navigationOptions: {
            tabBarLabel: "Request"
        }

    },    
})