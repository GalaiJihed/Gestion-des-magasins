import React ,{Component}  from "react";
import {Text, View} from "react-native";
import AnimatedSplash from "./AnimatedSplash";

export default class SplashScreen extends Component
{
    state={
        loaded: false,

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({loaded: true});
            setTimeout(()=>this.props.navigation.navigate('SignIn'),2000)
        }, 2000);
    }


    render(){
        return(
            <AnimatedSplash
                logoWidht={150}
                logoHeight={150}
                isLoaded={this.state.loaded}
                backgroundColor={"#0288D1"}
                logoImage={require("../../Assets/Images/logo.png")}
            >
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#262626",
                    }}

                >
                    <Text style={{ color: "#fdfdfd", fontSize: 30 }}>Hello</Text>
                </View>
            </AnimatedSplash>
        )
    }
}
