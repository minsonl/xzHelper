import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux'; // 引入connect函数
import *as counterAction from '../actions/counterAction';
class MainPage extends Component {
    static navigationOptions = {
        title: '易信接单系统',
    };
    render() {
        const { addition,reduction } = this.props;
        console.log(this.props)
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>addition()} >
                    <Text>Addition</Text>
                </TouchableOpacity>
                <Text>{this.props.count&&this.props.count}</Text>
                <TouchableOpacity onPress={()=>reduction()}>
                    <Text>Reduction</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    }
});
const mapStateToProps = (state) => {
    return {
        count: state.counter.count,
    }
};
const  mapDispatchToProps = (dispatch) => {
    return{
        addition: () => dispatch(counterAction.addition()),
        reduction: () => dispatch(counterAction.reduction()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainPage)
