import * as types from '../constants/loginTypes';
let user = {
    username: 'minson',
    password: '000000',
}
export function login(username,password) {
  return dispatch => {
    dispatch(isLogining());
    // 模拟用户登录
      let result = fetch('https://www.baidu.com/').then(
          (res)=>{dispatch(loginSuccess(true,"fd3g41sd3fgsd54g6sd4g6sd4fg64"));
      }).catch((e)=>{
          dispatch(loginError(false));
      })
  }
}

function isLogining() {
  return {
    type: types.LOGIN_IN_DOING
  }
}

function loginSuccess(isSuccess, token) {
    storage.save({
        key:'token',    // 注意:请不要在key中使用_下划线符号!
        data: {
            token:token,
        },
        expires: 1000 * 3600 * 6 //6小时过期
    });
  return {
    type: types.LOGIN_IN_DONE,
      isSuccess: isSuccess,
  }
}

function loginError(isSuccess) {
  console.log('error');
  return {
    type: types.LOGIN_IN_ERROR,
  }
}
