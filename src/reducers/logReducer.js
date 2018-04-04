import * as types from '../constants/logTypes';
const initState = {
    username:"",
    token:""
}
export default function logReducer(state=initState, action) {
    switch (action.type) {
        case types.LOGIN_DOING:
            return {
                ...state,
                status: '正在登录',
                isSuccess: false,
            }
            break;
        case types.LOGIN_DONE:
            return {
                ...state,
                status: '登录成功',
                isSuccess: true,
            }
            break;
        case types.LOGIN_ERROR:
            return {
                ...state,
                status: '登录出错',
                isSuccess: true,
            }
            break;
        case types.LOGOUT_DOING:
            return {
                ...state,
                status: '正在注销登录',
                isSuccess: false,
            }
            break;
        case types.LOGOUT_DONE:
            return {
                ...state,
                status: '注销登录成功',
                isSuccess: true,
            }
            break;
        case types.LOGOUT_ERROR:
            return {
                ...state,
                status: '注销登录出错',
                isSuccess: false,
            }
            break;
        default:
            return state;
    }
}
