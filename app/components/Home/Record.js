import React, {Component} from "react";
import {StyleSheet, Text, View,ScrollView} from "react-native";
import { List, ListItem } from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
const list = [
    {
        title: 'storage',
        icon: 'av-timer'
    },
    {
        title: 'lottie',
        icon: 'av-timer'
    },
    {
        title: 'swiper',
        icon: 'flight-takeoff'
    },
    {
        title: 'device',
        icon: 'flight-takeoff'
    },
    {
        title: 'swipeout',
        icon: 'av-timer'
    },
    {
        title: 'progress',
        icon: 'flight-takeoff'
    },
    {
        title: 'datepicker',
        icon: 'av-timer'
    },
    {
        title: 'picker',
        icon: 'flight-takeoff'
    },
    {
        title: 'carousel',
        icon: 'flight-takeoff'
    },
    {
        title: 'collapsible',
        icon: 'flight-takeoff'
    },
    {
        title: 'blur',
        icon: 'flight-takeoff'
    },
    {
        title: 'calendar',
        icon: 'flight-takeoff'
    },
    {
        title: 'actionSheet',
        icon: 'flight-takeoff'
    },
    {
        title: 'modalBox',
        icon: 'flight-takeoff'
    },
    {
        title: 'textInputEffect',
        icon: 'flight-takeoff'
    },
]
export default class Record extends Component {

    onPress = i => {
        Actions[i]()
    }

    render() {
        return (
            <ScrollView>
                <List>
                    {
                        list.map((item, i) => (
                            <ListItem
                                containerStyle={{borderBottomColor: 'red',borderBottomWidth: 0.5,borderTopWidth: 0}}
                                key={i}
                                title={item.title}
                                leftIcon={{name: item.icon}}
                                onPress={() => this.onPress(item.title)}
                            />
                        ))
                    }
                </List>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

});
