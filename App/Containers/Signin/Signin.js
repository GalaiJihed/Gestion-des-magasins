import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,

} from 'react-native';
import styles from './SigninStyle';


export default class Signin extends Component<Props> {
  state = {
    phoneNumber: '20906926',
    password: 'jihed',

  };

 render() {
    const {password, phoneNumber} = this.state;
    const B = (props) => (
      <Text style={{fontWeight: 'bold', fontSize: 12}}>{props.children}</Text>
    );



    return (
      <ImageBackground
        source={require('../../Assets/Images/login_background.png')}
        style={styles.image}>
        <Image
          source={require('../../Assets/Images/logo.png')}
          style={styles.logo}
        />

        <View style={{padding: 30}}>
          <TextInput
            label="Email"
            mode="outlined"
            style={styles.textInput}
            value={phoneNumber}
            onChangeText={(usr) => this.setState({phoneNumber: usr})}

            //onChangeText={text => setText(text)}
          />
          <TextInput
            label="Password"
            mode="outlined"
            secureTextEntry={true}
            value={password}
            style={{backgroundColor: 'rgba(255,182,193,0.5)'}}
            onChangeText={(pass) => this.setState({password: pass})}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this._login();
            }}>
            <Text>Signin</Text>
          </TouchableOpacity>
          <View style={styles.view}>
            <TouchableOpacity
              onPress={() => {
              //  this._redirectRegister();
				  console.log("hello");
              }}>
              <Text style={styles.text}>Signup</Text>
            </TouchableOpacity>
            <Text style={styles.text}>Mot de passe oublié ? </Text>
            {this.props.loginErrorMessage ? (
              <Text> Bad credentials ! try again </Text>
            ) : null}
          </View>
        </View>
      </ImageBackground>
    );
  }
}
