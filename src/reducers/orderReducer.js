import * as types from '../constants/orderType';
const initGetOrderDetailsState = {
    status: '点击获取详情',
    isSuccess: false,
    datas: null,
};
const initReceiveOrderState = {
    status: '等待接单',
    isSuccess: false
};
function orderReducer(state=initGetOrderDetailsState, action) {
    switch (action.type) {
        case types.ORDER_DETAILS_DOING:
            return {
                ...state,
                status: '正在获取详情',
                isSuccess: false,
                datas: null,
            }
            break;
        case types.ORDER_DETAILS_DONE:
            return {
                ...state,
                status: '获取详情成功',
                isSuccess: true,
                datas: action.orderDetailsData,
            }
            break;
        case types.ORDER_DETAILS_ERROR:
            return {
                ...state,
                status: '获取详情失败',
                isSuccess: false,
                datas: null,
            }
            break;
        case types.ORDER_RECEIVE_DOING:
            return {
                ...state,
                status: '正在接单',
                isSuccess: false
            }
            break;
        case types.ORDER_RECEIVE_DONE:
            return {
                ...state,
                status: '接单成功',
                isSuccess: true,
                order_id:action.order_id,
                datas: action.orderDetailsData,
            }
            break;
        case types.ORDER_RECEIVE_ERROR:
            return {
                ...state,
                status: '接单失败',
                isSuccess: false
            }
            break;
        case types.ORDER_CANCEL_DOING:
            return {
                ...state,
                status: '正在取消订单',
                isSuccess: false
            }
            break;
        case types.ORDER_CANCEL_DONE:
            return {
                ...state,
                status: '取消接单成功',
                isSuccess: true,
                order_id:action.order_id,
                datas: action.orderDetailsData,
            }
            break;
        case types.ORDER_CANCEL_ERROR:
            return {
                ...state,
                status: '取消订单失败',
                isSuccess: false
            }
            break;
        case types.ORDER_COMPLETE_DOING:
            return {
                ...state,
                status: '正在完成订单',
                isSuccess: false
            }
            break;
        case types.ORDER_COMPLETE_DONE:
            return {
                ...state,
                status: '完成订单成功',
                isSuccess: true,
                order_id:action.order_id,
                datas: action.orderDetailsData,
            }
            break;
        case types.ORDER_COMPLETE_ERROR:
            return {
                ...state,
                status: '完成订单失败',
                isSuccess: false
            }
            break;
        default:
            return state;
    }
}
export {orderReducer}