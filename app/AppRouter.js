import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Index from './components/Home/Index';
import Lottie from './components/Lottie/Lottie';
import Swiper from './components/Swiper/Swiper';
import Picker from './components/Picker/Picker2';
import Device from './components/Device/Device';
import Carousel from './components/Carousel/Carousel';
import Swipeout from './components/Swipeout';
import Collapsible from './components/Collapsible';
import Storage from './components/Storage';
import Progress from './components/Progress';
import Blur from './components/Blur';
import Calendar from './components/Calendar';
import ActionSheet from './components/ActionSheet';
import RNModalBox from './components/RNModalbox';
import TextInputEffect from './components/TextInputEffect';

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        console.log('ACTION:', action);
        return defaultReducer(state, action);
    };
};
const getSceneStyle = () => ({
    backgroundColor: '#fff',
    shadowOpacity: 1,
    shadowRadius: 3,
});

const AppRouter = () => (
    <Router
        createReducer={reducerCreate}
        getSceneStyle={getSceneStyle}

    >
        <Stack key="root">
            <Scene key="index" component={Index} title="Index"/>
            <Scene key="login" component={Login} title="Login"/>
            <Scene key="register" component={Register} title="Register"/>
            <Scene key="home" component={Home} hideNavBar/>
            <Scene key="lottie" component={Lottie} />
            <Scene key="swiper" component={Swiper} hideNavBar/>
            <Scene key="picker" component={Picker} />
            <Scene key="device" component={Device} />
            <Scene key="storage" component={Storage} />
            <Scene key="carousel" component={Carousel} hideNavBar/>
            <Scene key="swipeout" component={Swipeout} />
            <Scene key="collapsible" component={Collapsible}/>
            <Scene key="progress" component={Progress}/>
            <Scene key="blur" component={Blur}/>
            <Scene key="calendar" component={Calendar}/>
            <Scene key="actionSheet" component={ActionSheet}/>
            <Scene key="modalBox" component={RNModalBox}/>
            <Scene key="textInputEffect" component={TextInputEffect}/>
        </Stack>
    </Router>
);

export default AppRouter;
