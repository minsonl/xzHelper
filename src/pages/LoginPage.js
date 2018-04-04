import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import {connect} from 'react-redux'; // 引入connect函数
import *as logAction from '../actions/logAction';
import {NavigationActions} from 'react-navigation';
import {rpx} from '../components/response';

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({routeName: 'HomePage'})
    ]
})

class LoginPage extends Component {
    static navigationOptions = {
        header: null
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {username: 'Minson', password: '000000'};
    }

    componentWillMount() { //没过期自动登录
        storage.load({
            key: 'userInformation',
            autoSync: false,
        }).then(
            ret => {
                if(ret.token&&ret.token!=""){
                    this.props.navigation.dispatch(resetAction)
                }
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 登录完成,切成功登录
        if (nextProps.status === '登录成功' && nextProps.isSuccess) {
            this.props.navigation.dispatch(resetAction)
            return false;
        }
        return true;
    }

    render() {
        const {login} = this.props;
        return (
            <ScrollView style={styles.container}>
                <ImageBackground source={require('../../assets/images/loginBg.png')} style={styles.backgroundImage}>
                    <Image source={require('../../assets/images/loginLogo.png')} style={styles.loginLogo}/>
                    <View style={styles.formBox}>
                        <View style={styles.cellBox}>
                            <TextInput
                                style={styles.TextInput}
                                placeholder="请输入登录账号"
                                underlineColorAndroid='transparent'
                                value={this.state.username}
                                onChangeText={(username) => this.setState({username})}
                            />
                        </View>
                        <View style={styles.cellBox}>
                            <TextInput
                                style={styles.TextInput}
                                secureTextEntry={true}
                                placeholder="请输入登录密码"
                                underlineColorAndroid='transparent'
                                value={this.state.password}
                                onChangeText={(password) => this.setState({password})}
                            />
                        </View>
                        <TouchableOpacity
                            onPress={() => login(this.state.username, this.state.password)}
                            style={styles.loginBtn}
                            opacity="0.5"
                        >
                            <Text style={{color: '#ffffff'}}>登录</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={{marginTop: rpx(150), marginBottom: rpx(50), alignItems: 'center'}}>
                    <Text style={{color: '#888786', fontSize: rpx(26)}}>易信上门洗车 爱尚便捷生活</Text>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.logReducer.status,
        isSuccess: state.logReducer.isSuccess
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(logAction.login(username, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    backgroundImage: {
        flex: 1,
        width: rpx(750),
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    loginLogo: {
        width: rpx(500),
        height: rpx(566),
        marginTop: rpx(120)
    },
    formBox: {
        width: rpx(500)
    },
    cellBox: {
        width: rpx(498),
        height: rpx(76),
        borderWidth: 1,
        borderColor: '#daa979',
        flexDirection: 'row',
        marginBottom: rpx(40),
        alignItems: 'center',
        borderRadius: 3
    },
    icon: {
        fontSize: rpx(44),
        marginLeft: rpx(20),
        color: '#daa979'
    },
    TextInput: {
        width: rpx(420),
        height: rpx(76),
        color: '#333333',
        fontSize: rpx(28)
    },
    loginBtn: {
        height: rpx(90),
        backgroundColor: '#daa979',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    }
});