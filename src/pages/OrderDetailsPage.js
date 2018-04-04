import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Linking
} from 'react-native';

import { connect } from 'react-redux'; // 引入connect函数
import *as orderAction from '../actions/orderAction';
import  {rpx} from '../components/response';
const StackOptions = ({navigation}) => { //导航条配置
    // console.log(navigation);
    let {state,goBack} = navigation;
    const headerTitle = "易信接单系统";
    const headerBackTitle = false;
    const headerLeft = (
        <TouchableOpacity onPress={()=>{goBack()}} >
            <Text style={{color:'white',paddingLeft:rpx(20)}}>返回</Text>
        </TouchableOpacity>
    );
    const headerRight = (
        <Text onPress={null}></Text>
    )
    return {headerTitle,headerBackTitle,headerLeft,headerRight}
};
class OrderDetailsPage extends Component {
    //应用导航条
    static navigationOptions = ({navigation}) => StackOptions({navigation});
    componentDidMount() {
        this.props.getOrderDetails();
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.status=="正在获取详情"){
            console.log("正在获取详情");
        }else if(nextProps.status=="获取详情成功"){
            console.log("获取详情成功");
        }else if(nextProps.status=="获取详情失败"){
            console.log("获取详情失败");
        }else if(nextProps.status=="正在接单"){
            console.log("正在接单");
        }else if(nextProps.status=="接单成功"){
            console.log("接单成功");
        }else if(nextProps.status=="接单失败"){
            console.log("接单失败");
        }
        return true;
    };
    render() {
        const {orderDatas} = this.props;
        return(
            <ScrollView style={styles.container}>
                <View style={styles.dl}>
                    <View style={styles.dd}>
                        <Text style={styles.dtText}>订单信息</Text>
                    </View>
                    <View style={styles.dd}>
                        <Text style={styles.ddText}>订单号:
                            <Text style={styles.ddText}>{orderDatas&&orderDatas.order_sn}</Text>
                        </Text>

                    </View>
                    <View style={styles.dd}>
                        <Text style={styles.ddText}>订单时间:
                            <Text style={styles.ddText}>{orderDatas&&orderDatas.addTime}</Text>
                        </Text>
                    </View>
                    {   orderDatas&&orderDatas.s_status==1&&
                    <View style={styles.dd}>
                        <Text style={styles.ddText}>接单时间:
                            <Text style={styles.ddText}>{orderDatas.receive_time&&orderDatas.receive_time}</Text>
                        </Text>
                    </View>
                    }

                    {   orderDatas&&orderDatas.s_status==2&&
                        <View style={styles.dd}>
                            <Text style={styles.ddText}>完成时间:
                                <Text style={styles.ddText}>{orderDatas.complete_time&&orderDatas.complete_time}</Text>
                            </Text>
                        </View>
                    }


                </View>

                <View style={styles.dl}>
                    <View style={styles.dd}>
                        <Text style={styles.dtText}>服务内容</Text>
                    </View>
                    <View style={styles.dd}>
                        <Text style={styles.ddText}>服务项目:
                            <Text style={styles.ddText}>{orderDatas&&orderDatas.product.map(item=>{return item+"、"})}</Text>
                        </Text>

                    </View>
                    <View style={styles.dd}>
                        <Text style={styles.ddText}>价格:
                            <Text style={styles.ddText}>￥{orderDatas&&orderDatas.price}</Text>
                        </Text>
                    </View>
                    <View style={styles.dd}>
                        <Text style={styles.ddText}>地址:
                            <Text style={styles.ddText}>{orderDatas&&orderDatas.address1}{orderDatas&&orderDatas.address}</Text>
                        </Text>
                    </View>
                </View>

                <View style={styles.dl}>
                    <View style={styles.dd}>
                        <Text style={styles.dtText}>客户信息</Text>
                    </View>
                    <View style={styles.dd}>
                        <Text style={styles.ddText}>姓名:
                            <Text style={styles.ddText}>{orderDatas&&orderDatas.consignee}</Text>
                        </Text>
                    </View>
                    <View style={styles.dd}>
                        <Text style={styles.ddText}>电话:
                            <Text style={styles.ddText} onPress={()=>Linking.openURL('tel:'+orderDatas.mobile)}>
                                {orderDatas&&orderDatas.mobile}
                                <Text style={{color:'blue'}}>(点击可拨打该电话)</Text>
                            </Text>
                        </Text>
                    </View>
                </View>

                <View style={styles.dl}>
                    <View style={styles.dd}>
                        <Text style={styles.dtText}>车辆信息</Text>
                    </View>
                    <View style={styles.dd}>
                        <Text style={styles.ddText}>车牌号码:
                            <Text style={styles.ddText}>{orderDatas&&orderDatas.car_number}</Text>
                        </Text>
                    </View>
                    <View style={styles.dd}>
                        <Text style={styles.ddText}>车牌品牌:
                            <Text style={styles.ddText}>{orderDatas&&orderDatas.car_brand}</Text>
                        </Text>
                    </View>
                    <View style={styles.dd}>
                        <Text style={styles.ddText}>车牌颜色:
                            <Text style={styles.ddText}>{orderDatas&&orderDatas.car_color}</Text>
                        </Text>
                    </View>
                </View>

                <View style={styles.buttons}>
                    {
                        orderDatas&&orderDatas.s_status==0&&
                        <TouchableOpacity
                            style={styles.receiveBtn}
                            onPress={()=>this.props.receiveOrder(orderDatas.order_id)}
                            opacity={0.7}
                        >
                            <Text style={styles.btnText}>接取订单</Text>
                        </TouchableOpacity>
                    }
                    {
                        orderDatas&&orderDatas.s_status==1&&
                        <TouchableOpacity
                            style={styles.cancelBtn}
                            onPress={()=>{this.props.cancelOrder(orderDatas.order_id)}}
                            opacity={0.7}
                        >
                            <Text style={styles.btnText}>取消订单</Text>
                        </TouchableOpacity>
                    }
                    {
                        orderDatas&&orderDatas.s_status==1&&
                        <TouchableOpacity
                            style={styles.receiveBtn}
                            onPress={()=>{this.props.completeOrder(orderDatas.order_id)}}
                            opacity={0.7}
                        >
                            <Text style={styles.btnText}>完成订单</Text>
                        </TouchableOpacity>
                    }
                </View>
            </ScrollView>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        status:state.orderReducer.status,
        isSuccess:state.orderReducer.isSuccess,
        orderDatas: state.orderReducer.datas,
    }
};
const  mapDispatchToProps = (dispatch) => {
    return{
        getOrderDetails: (order_id) => dispatch(orderAction.getOrderDetails(order_id)),
        receiveOrder: (order_id) => dispatch(orderAction.receiveOrderAction(order_id)),
        cancelOrder:(order_id) =>dispatch(orderAction.cancelOrderAction(order_id)),
        completeOrder:(order_id)=>dispatch(orderAction.completeOrderAction(order_id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(OrderDetailsPage);

/*styles*/

const buttonStyle = {
    width:rpx(690),
    height:rpx(100),
    alignItems:'center',
    justifyContent:'center',
    borderRadius:rpx(8),
    marginVertical:rpx(15)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    dl:{
        backgroundColor:'white',
        paddingHorizontal:rpx(30),
        marginTop:rpx(20)
    },
    dtText:{
        color:'#daa979',
        fontSize:rpx(32)
    },
    ddText:{
        color:'#555555',
        fontSize:rpx(30),
    },
    dd:{
        width:rpx(690),
        paddingVertical:rpx(23),
        borderBottomWidth:1,
        borderColor:"#f5f5f5",
        borderStyle:'solid',
        justifyContent:'center',
        alignItems:'flex-start'
    },
    buttons:{
        marginHorizontal:rpx(30),
        marginVertical:rpx(50)
    },
    receiveBtn:{
        ...buttonStyle,
        backgroundColor:'#daa979'
    },
    cancelBtn:{
        ...buttonStyle,
        backgroundColor:'#ec5353',
    },
    completeBtn:{
        ...buttonStyle,
        backgroundColor:'#daa979'
    },
    btnText:{
        color:'white'
    }
});
