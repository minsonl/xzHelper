import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import *as logAction from '../actions/logAction';
import {NavigationActions} from 'react-navigation';
import {rpx} from '../components/response';
import MenuItem from '../components/mainMenuItem';

const logoutAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'LoginPage'})
    ]
});
const goService_bPage = ()=>{
    navigate('Service_bPage');
}
class MyPage extends Component {
    static navigationOptions = {
        title: '信治助手',
    };
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.isSuccess&&nextProps.status=="注销登录成功"){
            this.props.navigation.dispatch(logoutAction);
            return false;
        }
        return true;
    }
    render() {
        const menuConfig = [
            {icon:'\ue61f',iconColor:'#78c4e8',text:'接单记录',route:'',onpress:function(){console.log("onpress")}},
            {icon:'\ue61d',iconColor:'#f0941d',text:'修改密码',route:'',onpress:function(){console.log("onpress")}},
            {icon:'\ue605',iconColor:'#5ac458',text:'面对面订单',route:'',onpress:function(){console.log("onpress")}},
            {icon:'\ue636',iconColor:'#e43519',text:'注销登录',route:'',onpress:'exit'},
        ]
        let {logout} = this.props;
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{navigate('calcPage',{title:"计算器"})}}>
                    <Text>计算器示例</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigate('Service_b_Page',{title:"B端服务"})}}>
                    <Text>B端服务</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigate('Service_c_Page',{title:"C端服务"})}}>
                    <Text>C端服务</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{alert("功能开发中，敬请期待!")}}>
                    <Text>微信客服</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>修改密码</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>检查更新</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={logout}>
                    <Text>注销登录</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        status: state.logReducer.status,
        isSuccess: state.logReducer.isSuccess
    }
};

const  mapDispatchToProps = (dispatch) => {
    return{
        logout: (username, token) => dispatch(logAction.logout(username, token)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyPage)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: '#F7F7F7',
    }
});
