import React, {Component} from "react";
import {Dimensions, Image,ImageBackground,StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Swiper from "react-native-swiper";
import {Actions} from "react-native-router-flux";

const {width, height} = Dimensions.get('window');

export  default class SwiperText extends Component {
    constructor(props) {
        super(props);
        this.imageSource = [require('./images/1.png'),require('./images/2.png'),require('./images/3.png'),require('./images/4.png')]
    }

    _onPress() {
        Actions.index()
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar
                    hidden={true}
                />
                <Swiper
                    style={styles.wrapper}
                    sdot={<View style={{
                        backgroundColor: 'rgba(255,255,255,.3)',
                        width: 13,
                        height: 13,
                        borderRadius: 7,
                        marginLeft: 7,
                        marginRight: 7
                    }}/>}
                    activeDot={<View style={{
                        backgroundColor: '#f1f1f1',
                        width: 13,
                        height: 13,
                        borderRadius: 7,
                        marginLeft: 7,
                        marginRight: 7
                    }}/>}
                    paginationStyle={{bottom: 50}}
                    loop={false}>
                    {
                        this.imageSource.map((item,i)=>(
                            <View
                                key={i}
                                style={styles.row}
                            >
                                <ImageBackground
                                    style={styles.image}
                                    source={item}
                                    resizeMode={Image.resizeMode.contain}
                                >
                                    {
                                        i === 3 && (
                                            <View style={styles.bottom}>
                                                <TouchableOpacity
                                                    style={styles.btn}
                                                    underlayColor='transparent'
                                                    onPress={this._onPress}>
                                                    <Text style={styles.text}>开始呼遇</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    }
                                </ImageBackground>
                            </View>
                        ))
                    }
                </Swiper>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    row: {
        flex: 1
    },
    image: {
        flex: 1,
        width: width,
        height: height,
    },
    bottom: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        right: 0,
        left: 0,
        bottom: 82,
    },
    btn: {
        borderWidth: 1,
        borderColor: '#00cf92',
        padding: 10,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 20,
    },
    text: {
        color: '#00cf92',
        fontSize: 18,
    }
});