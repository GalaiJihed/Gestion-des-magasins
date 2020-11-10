
import React, {Component} from 'react';

import {TextInput} from 'react-native-paper';
import {
    View,
    TouchableOpacity,
    Text,
    ImageBackground,
    Image, ScrollView,

} from 'react-native';
import styles from './SigninStyle';
import {inject, observer} from 'mobx-react';
@inject('storeAuth')
@observer
export default class Signin extends Component<Props> {
  state = {
    username: 'jihed',
    password: 'admin',

  };
    static navigationOptions = { headerShown: false }
    _login() {


        this.props.storeAuth.Auth(this.state);
        this.props.navigation.navigate('StoresList');


    }
    _redirectRegister(){

    }
 render() {
    const {password, username} = this.state;
    const B = (props) => (
      <Text style={{fontWeight: 'bold', fontSize: 12}}>{props.children}</Text>
    );



    return (
      <ImageBackground
        source={require('../../Assets/Images/background2.png')}
        style={styles.image}>
          <View style={{marginTop:10}}>
              <Text style={styles.title}>Login</Text>
          </View>
        <Image
          source={require('../../Assets/Images/logo.jpg')}
          style={styles.logo}
        />
          <View style={{padding: 30}}>
              <TextInput
                  label="Username"
                  mode="outlined"

                  value={username}
                  onChangeText={(usr) => this.setState({username: usr})}


              />

              <TextInput
                  label="Password"
                  mode="outlined"
                  secureTextEntry={true}
                  value={password}

                  onChangeText={(pass) => this.setState({password: pass})}
              />
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                     this._login()
                  }}>
                  <Text>Signin</Text>
              </TouchableOpacity>
              <View style={styles.view}>
                  <TouchableOpacity
                      onPress={() => {

                          this._redirectRegister();
                      }}>
                      <Text style={styles.text}>Signup</Text>
                  </TouchableOpacity>
                  <Text style={styles.text}>Mot de passe oublié ? </Text>

              </View>
          </View>

      </ImageBackground>
    );
  }
}
