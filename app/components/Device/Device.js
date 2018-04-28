import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
var DeviceInfo = require('react-native-device-info');

const brand = DeviceInfo.getBrand();
const fontScale = DeviceInfo.getFontScale();
export default class Home extends Component {
    state = {
        ip: 0
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {brand}
                </Text>
                <Text style={styles.instructions}>
                    {fontScale}
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
