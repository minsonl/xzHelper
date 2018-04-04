/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';
import Order from '../components/Order';
import orderData from "../testData.json";
import {rpx} from "../components/response";
export default class App extends Component<{}> {
    static navigationOptions = {
        title: '我的',
    };
    refreshing(){
        let timer =  setTimeout(()=>{
            clearTimeout(timer)
            alert('刷新成功')
        },1500)
    }
    render() {
        return (
            <FlatList
                numColumns = {1}
                initialNumToRender = {9}
                onRefresh={this.refreshing}
                refreshing={false}
                data={orderData.orders}
                keyExtractor={item=>item.id}
                renderItem={
                    ({item}) => <Order orderItem={item} />
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efeff4',
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
