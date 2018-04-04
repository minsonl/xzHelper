import React, { Component } from 'react';
import {Text,StyleSheet,Button,View,TouchableOpacity} from 'react-native';
import  { StackNavigator, TabNavigator} from "react-navigation";
import Storage from '../components/Storage';
import TabBarBottom from 'react-navigation/src/views/TabView/TabBarBottom';
import {rpx} from '../components/response';
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import CarQueryPage from '../pages/service_b/CarQueryPage';
import Record_b_Page from '../pages/service_b/RecordPage';
import ReceiveOrderPage from '../pages/service_c/ReceiveOrderPage';
import Record_c_Page from '../pages/service_c/RecordPage';
import RecevieFtfOrderPage from '../pages/service_c/RecevieFtfOrderPage';
import calc from '../pages/MainPage';
//通用 顶部header配置
const StackNavigatorOptions = ({navigation},options) => {
    /* options
    //     options.title
    //     options.HideHeaderLeft
    */
    let {state,goBack} = navigation;
    console.log(state)
    // 用来判断是否隐藏或显示header
    let visible= state.params&&state.params.isVisible&&state.params.isVisible;
    let header;
    if (visible === true){
        header = null;
    }
    const headerStyle = {
        backgroundColor:'#419cef',
        borderBottomWidth:rpx(1),
        borderColor:'#3792e4',
        elevation:0,
    };
    // const headerTitle = state.params.title;
    const headerTitle = options.title?options.title:null;
    const headerTitleStyle = {
        color:'#ffffff',
        flex:1,
        textAlign:'center',
        alignSelf:'center',
        fontWeight:'normal',
        fontSize:rpx(30)
    };
    const headerBackTitle = false;
    const headerLeft = options.HideHeaderLeft?
        (<View></View>):
        (
            <TouchableOpacity onPress={()=>goBack()} activeOpacity={0.7}>
                <Text style={{color:"#ffffff",fontSize:rpx(26),marginLeft:rpx(10)}}>返回</Text>
            </TouchableOpacity>
        );

    const headerRight = (
        <View>
            <Text></Text>
        </View>
    );
    return {headerStyle,headerTitle,headerTitleStyle,headerBackTitle,headerLeft,headerRight}
};
//通用 Tab页面样式配置
const TabNavigatorConfigs = (initialRouteName)=> {
    return {
        initialRouteName: initialRouteName,
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled:false,
        lazy: true,
        tabBarOptions: {
            style:{},
            mode: 'card',
            headerMode: 'screen',
            activeTintColor:'#daa979',
            inactiveBackgroundColor:'#f7f7f7',
            activeBackgroundColor:'#f7f7f7'
        }
    };
};
//B端服务 Tab页面路由配置
const Service_b_TabRouteConfigs = {
    CarQueryPage: {
        screen: CarQueryPage,
        navigationOptions: {
            tabBarLabel: '查询车辆',
            // tabBarIcon: ({tintColor,focused}) => (
            //     focused?
            //         <Text style={styles.tabIcon_focused}>&#xe61e;</Text>:
            //         <Text style={styles.tabIcon}>&#xe61e;</Text>
            // ),
        },
    },
    Record_b_Page: {
        screen: Record_b_Page,
        navigationOptions: {
            tabBarLabel: '服务记录',
            // tabBarIcon: ({tintColor,focused}) => (
            //     focused?
            //         <Text style={styles.tabIcon_focused}>&#xe791;</Text>:
            //         <Text style={styles.tabIcon}>&#xe791;</Text>
            // ),
        },
    }
};
//C端服务 Tab页面路由配置
const Service_c_TabRouteConfigs = {
    ReceiveOrderPage: {
        screen: ReceiveOrderPage,
        navigationOptions: {
            tabBarLabel: '接单',
            // tabBarIcon: ({tintColor,focused}) => (
            //     focused?
            //         <Text style={styles.tabIcon_focused}>&#xe61e;</Text>:
            //         <Text style={styles.tabIcon}>&#xe61e;</Text>
            // ),
        },
    },
    RecevieFtfOrderPage: {
        screen: RecevieFtfOrderPage,
        navigationOptions: {
            tabBarLabel: '面对面接单',
            // tabBarIcon: ({tintColor,focused}) => (
            //     focused?
            //         <Text style={styles.tabIcon_focused}>&#xe61e;</Text>:
            //         <Text style={styles.tabIcon}>&#xe61e;</Text>
            // ),
        },
    },
    Record_c_Page: {
        screen: Record_c_Page,
        navigationOptions: {
            tabBarLabel: '服务记录',
            // tabBarIcon: ({tintColor,focused}) => (
            //     focused?
            //         <Text style={styles.tabIcon_focused}>&#xe791;</Text>:
            //         <Text style={styles.tabIcon}>&#xe791;</Text>
            // ),
        },
    }
};
const Service_b_Tab = TabNavigator(Service_b_TabRouteConfigs, TabNavigatorConfigs('CarQueryPage'));
const Service_c_Tab = TabNavigator(Service_c_TabRouteConfigs, TabNavigatorConfigs('ReceiveOrderPage'));

//应用总路由配置
const App = StackNavigator({
    HomePage:{screen: HomePage,navigationOptions:({navigation}) => StackNavigatorOptions({navigation},{HideHeaderLeft:true})},
    LoginPage: {screen: LoginPage},
    Service_b_Page: {screen: Service_b_Tab,navigationOptions:({navigation}) => StackNavigatorOptions({navigation},{title:"B端服务"})},
    Service_c_Page: {screen: Service_c_Tab,navigationOptions:({navigation}) => StackNavigatorOptions({navigation},{title:"C端服务"})},
    calcPage:{screen:calc},
    // MyPage: {screen: MyPage},
    // OrderDetailsPage:{screen:OrderDetailsPage,navigationOptions:navigationOptions}
},{
    initialRouteName:"HomePage",
    mode: 'card',
    headerMode: 'screen',
});

//图标样式
const styles = StyleSheet.create({
    tabIcon:{
        // fontFamily:'iconfont',
        // fontSize:rpx(43)
    },
    tabIcon_focused:{
        // fontFamily:'iconfont',
        // fontSize:rpx(43),
        // color:'#daa979'
    }
})
export default App