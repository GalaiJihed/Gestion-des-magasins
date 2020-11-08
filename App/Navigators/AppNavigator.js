import React from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



const RootStack = createStackNavigator({
    Splash: {
        screen: SplashScreen,
    },
    SignIn: {
        screen: Signin,
    },
    initialRouteName: 'SplashScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',


});
const AppContainer = createAppContainer(RootStack);
export default AppContainer;
