import * as types from '../constants/logTypes';
export function login(username,password) {
    return dispatch => {
        dispatch(isLogining(username));
        // 模拟用户登录
        let result = fetch('https://www.baidu.com/').then(
            (res)=>{dispatch(loginDone(username,"fd3g41sd3fgsd54g6sd4g6sd4fg64"));
            }).catch((e)=>{
            dispatch(loginError(false));
        })
    }
}

function isLogining(username) {
    return {
        type: types.LOGIN_DOING,
        username:username
    }
}

function loginDone(username,token) {
    storage.save({
        key:'userInformation',
        data: {
            username:username,
            token:token,
        },
        expires: 1000 * 3600 * 6 //6小时过期
    });
    return {
        type: types.LOGIN_DONE,
    }
}

function loginError() {
    return {
        type: types.LOGIN_ERROR,
    }
}

//登出
export function logout() {
    return dispatch => {
        dispatch(isLogouting());
        let result = fetch('https://www.baidu.com/').then(
            (res)=>{dispatch(logoutDone());
            }).catch((e)=>{
            dispatch(logoutError(false));
        })
    }
}

function isLogouting() {
    return {
        type: types.LOGOUT_DOING
    }
}

function logoutDone() {
    storage.save({
        key:'userInformation',
        data: {
            token:"",
        },
        expires: 1000 * 3600 * 6 //6小时过期
    });
    return {
        type: types.LOGOUT_DONE,
    }
}

function logoutError() {
    console.log("logoutError")
    return {
        type: types.LOGOUT_ERROR,
    }
}