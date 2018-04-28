import React, {Component} from "react";
import {Animated, Easing, StyleSheet, View} from "react-native";
import LottieView from "lottie-react-native";

export default class Lottie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            progress: new Animated.Value(0),
        };
    }

    componentDidMount() {
        Animated.timing(this.state.progress, {
            toValue: 1,
            duration: 3000,
            easing: Easing.linear,
        }).start();
    }

    render() {
        return (
            <View>
                <LottieView
                    style={{width:200,height:200}}
                    source={require('./json/newAnimation.json')}
                    progress={this.state.progress}
                    speed={1}
                    loop={true}
                />
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
