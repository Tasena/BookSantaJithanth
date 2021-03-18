import { createDrawerNavigator } from 'react-navigation-drawer';
import {AppTabNavigator} from './AppTabNavigator';
import customSideBarMenu from './customSidebarMenu';
import ProfileSettings from '../Screens/ProfileSettingsScreen'

export const AppDrawerNavigator = createDrawerNavigator({
    //jason
    Home:{
        screen: AppTabNavigator,
    },

    Profile:{
        screen: ProfileSettings,
    }

}, 

{
    contentComponent: customSideBarMenu,
    
},

{
    //jason
    initialRouteName: "home" 
}

);

