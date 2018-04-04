import React, { Component } from 'react';
import { StyleSheet, Text,View, TouchableOpacity,Linking } from 'react-native';
import {rpx} from './response';
export default class Order extends Component {
   render() {
        const orderItem = this.props.orderItem;
        return (
            <View style={styles.orderCont}>
                <View style={styles.orderAddTime}>
                    <Text style={styles.orderAddTimeText}>{orderItem.addTime}</Text>
                </View>
                <View style={styles.cellBox}>
                    <Text style={styles.cellText}>预约时间:<Text>{orderItem.addTime}</Text></Text>
                </View>
                <View style={styles.cellBox}>
                    <Text style={styles.cellText}>编号:<Text>{orderItem.order_sn}</Text></Text>
                </View>
                <View style={styles.cellBox}>
                    <Text style={styles.cellText}>地址:<Text>{orderItem.address1}{orderItem.address}</Text></Text>
                </View>
                <View style={styles.cellBox}>
                    <Text style={styles.cellText}>姓名:<Text>{orderItem.consignee}</Text></Text>
                </View>
                <View style={styles.cellBox}>
                    <Text style={styles.cellText} onPress={()=>Linking.openURL('tel:'+orderItem.mobile)}>
                        电话:<Text style={{color:'#005eff'}}>{orderItem.mobile}(点击拨打)</Text>
                    </Text>
                </View>
                <View style={styles.btnsCont}>
                    {
                        orderItem.status===0&&
                        <TouchableOpacity style={styles.btn1} onPress={()=>this.props.receiveOrder(orderItem.id)} opacity={0.5}>
                            <Text style={{color:'#ffffff'}}>接取订单</Text>
                        </TouchableOpacity>
                    }
                    {
                        orderItem.status!=0&&
                        <View style={styles.btn3_title}>
                            <Text style={{color:'#888888'}}>订单进行中...</Text>
                        </View>
                    }
                    <TouchableOpacity style={styles.btn2} onPress={()=>this.props.goDetailsPage(orderItem.id)} opacity={0.5}>
                        <Text>订单详情</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    orderCont: {
        width: rpx(710),
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        borderRadius:rpx(10),
        marginVertical:rpx(16),
        marginHorizontal:rpx(20)
    },
    orderAddTime:{
        width:rpx(680),
        height:rpx(70),
        borderBottomWidth:rpx(1),
        borderStyle:'solid',
        borderColor:'#daa979',
        alignItems:'flex-end',
        justifyContent:'center',
        marginLeft:rpx(15),
        marginRight:rpx(15),
        marginBottom:rpx(10)
    },
    orderAddTimeText:{
        fontSize:rpx(28),
        color:'#daa979',
        marginRight:rpx(15)
    },
    cellBox:{
        width:rpx(660),
        flexDirection:'row',
        paddingVertical:rpx(5)
    },
    cellContent:{
        fontSize:rpx(28),
    },
    cellText:{
        fontSize:rpx(28),
    },
    btnsCont:{
        width:rpx(680),
        height:rpx(120),
        marginHorizontal:rpx(15),
        flexDirection:'row',
        borderTopWidth:rpx(1),
        borderStyle:'solid',
        borderColor:'#daa979',
        marginTop:rpx(15),
        justifyContent:'space-around'
    },
    btn1:{
        width:rpx(268),
        height:rpx(60),
        marginTop:rpx(29),
        borderWidth:rpx(1),
        borderColor:'#f0a842',
        backgroundColor:'#daa979',
        borderRadius:rpx(5),
        justifyContent:'center',
        alignItems:'center'
    },
    btn2:{
        width:rpx(268),
        height:rpx(60),
        marginTop:rpx(29),
        borderWidth:rpx(1),
        backgroundColor:'#ffffff',
        borderRadius:rpx(5),
        justifyContent:'center',
        alignItems:'center'
    },
    btn3_title:{
        width:rpx(268),
        height:rpx(60),
        marginTop:rpx(29),
        borderWidth:rpx(0),
        backgroundColor:'#ffffff',
        borderRadius:rpx(5),
        justifyContent:'center',
        alignItems:'center',
    },
})
