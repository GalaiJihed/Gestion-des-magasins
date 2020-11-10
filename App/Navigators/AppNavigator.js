import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../Containers/SplashScreen/SplashScreen';
import Signin from '../Containers/Signin/Signin';
import StoresList from '../Containers/Stores/StoresList';
import StoreDetail from '../Containers/StoreDetails/StoreDetail';



const RootStack = createStackNavigator({
    Splash: {
        screen: SplashScreen,
    },
    SignIn: {
        screen: Signin,
    },
    StoresList:{
        screen:StoresList
    },
    StoreDetail:{
        screen:StoreDetail
    },
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',


});
const AppContainer = createAppContainer(RootStack);
export default AppContainer;
