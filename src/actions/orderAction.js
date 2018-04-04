import * as types from '../constants/orderType';
let orderDetailsData = {
    "id": 0,
    "order_id": 33,
    "s_status":0,
    "price":"250.00",
    "address1": "广东省 深圳市 罗湖区",
    "address": "天安数码城创新一期A座停车场",
    "addTime":"2017-12-12 12:12",
    "consignee": "李先生",
    "mobile": "12345678910",
    "car_number": "B00000",
    "car_brand": "宝马",
    "car_color": "白色",
    "order_sn": "201710211304363860",
    "product": [
        "汽车上门外洗车",
        "汽车上门打蜡",
    ]
}
// 获取订单详情Action
export function getOrderDetails() {
    return dispatch => {
        dispatch(getOrderDetailsLogining());
        let result = fetch('https://www.baidu.com/')
            .then((res)=>{
                dispatch(getOrderDetailsDone(true,orderDetailsData));
            }).catch((e)=>{
                dispatch(getOrderDetailsError(false));
            })
    }
}

function getOrderDetailsLogining() {
    return {
        type: types.ORDER_DETAILS_DOING
    }
}

function getOrderDetailsDone(isSuccess, orderDetailsData) {
    return {
        type: types.ORDER_DETAILS_DONE,
        isSuccess:isSuccess,
        orderDetailsData: orderDetailsData,
    }
}
function getOrderDetailsError(isSuccess) {
    return {
        type: types.ORDER_DETAILS_ERROR,
    }
}

// 接单Action
export function receiveOrderAction(order_id) {
    return dispatch => {
        dispatch(receiveOrderLogining());
        fetch('https://www.baidu.com/')
            .then((res)=>{
                dispatch(receiveOrderDone(order_id))
            }).catch((e)=>{
                dispatch(receiveOrderError(false));
            })
    }
}
function receiveOrderLogining() {
    return {
        type: types.ORDER_RECEIVE_DOING
    }
}
function receiveOrderDone(order_id) {
    return {
        type: types.ORDER_RECEIVE_DONE,
        order_id:order_id,
        orderDetailsData: {
            ...orderDetailsData,
            s_status:1,
            receive_time:getNowFormatDate()
        },
    }
}
function receiveOrderError(isSuccess) {
    return {
        type: types.ORDER_RECEIVE_ERROR,
    }
}

//取消订单Action
export function cancelOrderAction(order_id) {
    return dispatch => {
        dispatch(cancelOrderLogining());
        fetch('https://www.baidu.com/')
            .then((res)=>{
                dispatch(cancelOrderDone(order_id))
            }).catch((e)=>{
            dispatch(cancelOrderError(false));
        })
    }
}
function cancelOrderLogining() {
    return {
        type: types.ORDER_CANCEL_DOING
    }
}
function cancelOrderDone(order_id) {
    return {
        type: types.ORDER_CANCEL_DONE,
        order_id:order_id,
        orderDetailsData: {
            ...orderDetailsData,
            s_status:0
        },
    }
}
function cancelOrderError(isSuccess) {
    return {
        type: types.ORDER_CANCEL_ERROR,
    }
}


//完成订单Action
export function completeOrderAction(order_id) {
    return dispatch => {
        dispatch(completeOrderLogining());
        fetch('https://www.baidu.com/')
            .then((res)=>{
                dispatch(completeOrderDone(order_id))
            }).catch((e)=>{
            dispatch(completeOrderError(false));
        })
    }
}
function completeOrderLogining() {
    return {
        type: types.ORDER_COMPLETE_DOING
    }
}
function completeOrderDone(order_id) {
    return {
        type: types.ORDER_COMPLETE_DONE,
        order_id:order_id,
        orderDetailsData: {
            ...orderDetailsData,
            s_status:2,
            complete_time:getNowFormatDate()
        },
    }
}
function completeOrderError(isSuccess) {
    return {
        type: types.ORDER_COMPLETE_ERROR,
    }
}


function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}