import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import {rpx} from '../components/response';
export default class MenuItem extends Component<{}> {
    render() {
        const {icon,iconColor,text,route,index,onpress} = this.props;
        return (
            <TouchableOpacity style={styles.menuItem} onPress={onpress}>
                <Text style={{fontFamily:'iconfont',fontSize:rpx(60),color:iconColor,marginBottom:rpx(26)}}>{icon&&icon}</Text>
                <Text style={{fontSize:rpx(30)}}>{text&&text}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    menuItem:{
        width:rpx(249),
        height:rpx(249),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderRightWidth:rpx(2),
        borderBottomWidth:rpx(2),
        borderColor:'#f7f7f7'
    }
});
