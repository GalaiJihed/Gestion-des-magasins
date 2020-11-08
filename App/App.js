

import React from 'react';
import {StyleSheet} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from './Containers/SplashScreen/SplashScreen';
import AppContainer from './Navigators/AppNavigator';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: 'white',
    accent: '#f1c40f',
    text:'white',
    placeholder:'black'
  },
};
export default class App extends React.Component {
  render() {
    return (
        /**
         * @see https://github.com/reduxjs/react-redux/blob/master/docs/api/Provider.md
         */

        <PaperProvider theme={theme}>
          <AppContainer
              ref={nav => {
                this.navigator = nav;
              }}
          />

        </PaperProvider>

    )
  }
}


