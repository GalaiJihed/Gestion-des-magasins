


import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import stores from './Stores';
import AppContainer from './Navigators/AppNavigator';
import {inject, observer, Provider} from 'mobx-react';
const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
      background:'#00c0fb',
    accent: '#f1c40f',
    text:'black',
    placeholder:'black'
  },

};

export default class App extends React.Component {


    render() {
    return (
        /**
         * @see https://github.com/reduxjs/react-redux/blob/master/docs/api/Provider.md
         */
        <Provider {...stores}>
        <PaperProvider theme={theme}>
          <AppContainer
              ref={nav => {
                this.navigator = nav;

              }}

          />

        </PaperProvider>
        </Provider>
    )
  }
}


