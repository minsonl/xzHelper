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
})
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
        return (
            <View style={styles.container}>
                <View style={styles.userInforCont}>
                    <Text style={styles.username}><Text style={{fontFamily:'iconfont'}}>&#xe791;</Text> Minson</Text>
                    <Text style={styles.userid}>用户编号:110</Text>
                </View>
                <View style={styles.mainMenuCont}>
                    {menuConfig.map(
                        (item,index)=><MenuItem
                            key={index}
                            onpress={item.onpress=='exit'?()=> logout():item.onpress}
                            icon={item.icon}
                            iconColor={item.iconColor}
                            text={item.text}
                            route={item.route} i
                            ndex={index}
                        />
                    )}
                </View>
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
        backgroundColor: '#F7F7F7',
    },
    userInforCont:{
        width:rpx(750),
        flexDirection:'row',
        height:rpx(138),
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#ffffff',
        marginVertical:rpx(20)
    },
    username:{
        marginLeft:rpx(50),
        fontSize:rpx(32),
        color:'#daa979'
    },
    userid:{
        marginRight:rpx(50),
        fontSize:rpx(30),
        color:'#777'
    },
    mainMenuCont:{
        width:rpx(750),
        flexWrap:'wrap',
        flexDirection:'row'
    }
});
