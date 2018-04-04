import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
import *as orderAction from '../actions/orderAction';
import { NavigationActions } from 'react-navigation';
import Order from '../components/Order';
import orderData from "../testData.json";
import {rpx} from "../components/response";

class OrderNewPage extends Component{
    static navigationOptions = {
        title: '新订单',
    };
    constructor(props) {
        super(props);
        this.state = {orderData_state:orderData};
    }
    refreshing(){
        let timer =  setTimeout(()=>{
            clearTimeout(timer)
            alert('刷新成功')
        },500)
    }
    goDetailsPage = (order_id)=>{
        const navigateAction = NavigationActions.navigate({
            routeName: 'OrderDetailsPage',
            params: {order_id:order_id},
            action: NavigationActions.navigate({ routeName: 'OrderDetailsPage'})
        });
        this.props.navigation.dispatch(navigateAction)
    };
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.status=="接单成功"){
            for(let i in this.state.orderData_state.orders){
                if(this.state.orderData_state.orders[i].order_id == nextProps.order_id && this.state.orderData_state.orders[i].status==0){
                    let tempData = Object.assign({},this.state.orderData_state);
                    tempData.orders[i].status = 1;
                    this.setState({orderData_state:tempData});
                }
            }
        }
        return true
    };
    render() {
        return (
            <FlatList
                numColumns = {1}
                initialNumToRender = {9}
                onRefresh={this.refreshing}
                refreshing={false}
                data={this.state.orderData_state.orders}
                extraData={this.state.orderData_state}
                keyExtractor={item=>item.id}
                renderItem={
                    ({item}) => <Order orderItem={item} receiveOrder={(order_id)=>this.props.receiveOrder(order_id)} goDetailsPage={(order_id)=>this.goDetailsPage(order_id)} />
                }
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        status: state.orderReducer.status,
        isSuccess:state.orderReducer.isSuccess,
        order_id:state.orderReducer.order_id
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        receiveOrder: (order_id) => dispatch(orderAction.receiveOrderAction(order_id)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderNewPage)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efeff4',
    },
});
