import React, {Component} from "react";
import {Text,View,Image,TouchableOpacity,StyleSheet,} from "react-native";

class TabBar extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.tabName = ['记录', '课堂', '服务', '我的'];
        this.IconStyle = [{width: 30, height: 30}, {width: 30, height: 30}, {width: 30, height: 30}, {width: 30, height: 30}];
        this.tabIconSource = [require('./images/record1.png'), require('./images/class1.png'), require('./images/service1.png'), require('./images/mine1.png')];
        this.activeTabIconSource = [require('./images/record2.png'), require('./images/class2.png'), require('./images/service2.png'), require('./images/mine2.png')];
    }

    setAnimationValue({value}) {

    }

    componentDidMount() {
        // Animated.Value监听范围 [0, tab数量-1]
        this.props.scrollValue.addListener(this.setAnimationValue);
    }

    renderTabOption(tabName, i) {
        let color = this.props.activeTab === i ? "#00cf92" : "#ADADAD"; // 判断i是否是当前选中的tab，设置不同的颜色
        return (
            <TouchableOpacity
                key={i}
                onPress={() => this.props.goToPage(i)}
                style={styles.tab}
                activeOpacity={1}
            >
                <View style={styles.tabItem}>
                    <Image
                        style={[this.IconStyle[i], {marginTop: 1}]}
                        source={this.props.activeTab === i ? this.activeTabIconSource[i] : this.tabIconSource[i] }
                    />
                    <Text style={{color: color, marginTop: 2, fontSize: 12}}>
                        {tabName}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.tabs}>
                {this.tabName.map((tabName, i) => this.renderTabOption(tabName, i))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabs: {
        flexDirection: 'row',
        height: 55,
        borderTopWidth: 1,
        borderTopColor: '#e3e3e3',
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    tabItem: {
        alignItems: 'center',
    }
});


export default TabBar;