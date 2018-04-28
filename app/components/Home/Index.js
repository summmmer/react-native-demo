import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import ScrollableTabView from 'react-native-scrollable-tab-view';
import TabBar from './TabBar'
import Record from './Record'
import Class from './Class'
import Service from './Service'
import Mine from './Mine'


export default class Index extends Component {

    render() {
        return (
            <ScrollableTabView
                renderTabBar={() => <TabBar/>}
                tabBarPosition='bottom'>
                {/*记录*/}
                <Record/>
                {/*课堂*/}
                <Class/>
                {/*服务*/}
                <Service/>
                {/*我的*/}
                <Mine/>
            </ScrollableTabView>
        );
    }
}
