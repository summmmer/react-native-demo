import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import Storage from '../common/Storage'
export default class StorageTest extends Component {

    componentDidMount(){
        Storage.save('123456', '111111');

    }
    onPress = () => {
        Storage.load('123456')
            .then(data=> {
                if (data) {
                   alert(data)
                } else {

                }
            });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions} onPress={this.onPress}>
                    Storage
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
