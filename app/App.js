import React, {Component} from "react";
import {View} from "react-native";
import GlobalVariable from './common/GlobalVarisble'
import AppRouter from './AppRouter'

export default class Home extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <AppRouter/>
            </View>
        );
    }
}
