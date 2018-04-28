import React, {Component} from "react";
import {StyleSheet, Text, View,Picker} from "react-native";

export default class Home extends Component {
    state = {
        language: 'java'
    }
    render() {
        return (
            <View style={styles.container}>
                <Picker
                    style={{height: 100}}
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
