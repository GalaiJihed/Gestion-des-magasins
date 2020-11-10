import React, { Component } from 'react'
import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { Icon } from 'react-native-elements'

import PropTypes from 'prop-types'
import StoreStyle from '../StoreDetails/DetailStoreStyle'

const styles = StyleSheet.create({ ...StoreStyle })

class StoreDetail extends Component {

    Details = (props) => {
        this.props.navigation.state.params.item;

    }


    static defaultProps = {
        containerStyle: {},
    }



    renderDescription = () => {
        return (
            <View>

                <View style={{flexDirection:'row',marginTop:25}}>
                    <Icon
                        name='social-game-center'
                        type='foundation'
                        color='#517fa4'
                        style={{marginRight:20}}
                    />
                    <Text style={styles.text}>{this.props.navigation.state.params.item.Name}</Text>

                </View>

                <View style={{flexDirection:'row',marginTop:25}}>
                    <Icon
                        name='shopping-bag'
                        type='foundation'
                        color='#517fa4'
                        style={{marginRight:20}}
                    />
                    <Text style={styles.text}>{this.props.navigation.state.params.item.Type}</Text>

                </View>
                <View style={{flexDirection:'row',marginTop:25}}>
                    <Icon
                        name='telephone'
                        type='foundation'
                        color='#517fa4'
                        style={{marginRight:20}}

                    />
                    <Text style={styles.text}>{this.props.navigation.state.params.item.Phone}</Text>

                </View>
                <View style={{flexDirection:'row',marginTop:25}}>
                    <Icon
                        name='map'
                        type='foundation'
                        color='#517fa4'
                        style={{marginRight:20}}
                    />
                    <Text style={styles.text}>{this.props.navigation.state.params.item.Address}</Text>

                </View>
            </View>
        )
    }



    renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <View style={styles.coverContainer}>
                    <ImageBackground
                        source={require('../../Assets/Images/store.jpg')}
                        style={styles.coverImage}
                    >
                    </ImageBackground>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.mainViewStyle}>
                <ScrollView style={styles.scroll}>
                    <View style={[styles.container, this.props.containerStyle]}>
                        <View style={styles.cardContainer}>
                            {this.renderHeader()}
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 3,

                        }}
                    />
                    <View style={{marginTop:20}}>
                        <Text style={styles.title}>Detail Store</Text>
                    </View>

                    <View style={styles.Row}>{this.renderDescription()}</View>


                </ScrollView>
                <View style={styles.footer}>
                    <Icon
                        name='clock'
                        type='foundation'
                        color='black'
                        style={{margin:20}}
                    />
                    <Text>
                    {this.props.navigation.state.params.item.createdAt.substring(0,10)} {this.props.navigation.state.params.item.createdAt.substring(11,19)}
                </Text>
                </View>
            </View>
        )
    }
}

export default StoreDetail
