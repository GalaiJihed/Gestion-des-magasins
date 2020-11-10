import React, { useState } from 'react';
import {
    View,
    FlatList,
    Text,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    ImageBackground,
    Alert,
    ScrollView,
} from 'react-native';
import {inject, observer} from 'mobx-react';
import styles from '../Stores/StoreStyle';

@inject('dataStore')
@observer
export default class StoresList extends React.Component {
    static navigationOptions = { headerShown: false }
    // replace this data with your own from the api
    state = {
        //Assing a array to your pokeList state
        ListStore: [],
        //Have a loading state where when data retrieve returns data.
        loading: true
    }
    async componentDidMount() {

        //Have a try and catch block for catching errors.
        try {
            this.props.dataStore.getListStore()
            //Assign the promise unresolved first then get the data using the json method.

            this.setState({ListStore:  this.props.dataStore.stores, loading: false});
        } catch(err) {
            Alert("the list is empty ")
        }
    }
    showDetails = item => {
        // pass item as a navigation prop
        this.props.navigation.navigate('StoreDetail', { item: item });

    };


     renderItem = ({ item }) => {

        return (

           <TouchableOpacity
                onPress={() => this.showDetails(item)}
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor:"gray",
                    borderRadius:25,
                    marginTop:30
                }}
            >

                <Image
                    style={{ width: 100, height: 100 ,borderRadius:20,margin:2 }}

                    source={require('../../Assets/Images/store.jpg' )}
                />
                <View style={{flex: 1, padding: 20}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15, marginBottom: 10}}>{item.Name}</Text>
                    <Text>Address : {item.Address}</Text>
                </View>


            </TouchableOpacity>

        );
    };
render() {

    const { ListStore, loading } = this.state;
    if(loading){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator />
            </View>
        )
    }
return (

    <ImageBackground source={require('../../Assets/Images/background2.png')}
                     style={styles.image}>
        <View style={{marginTop:20}}>
            <Text style={styles.title}>Stores</Text>
        </View>

        <View style={{ flex: 1, padding: 10}}>
            <FlatList
                data={ListStore}
                renderItem={this.renderItem}
                keyExtractor={item => item.id.toString()}
            />
        </View>

    </ImageBackground>
);
}


}
