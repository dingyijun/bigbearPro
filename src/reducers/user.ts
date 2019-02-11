import { USER_LOGIN , USER_LOGOUT } from '../constants/counter'
import Taro from '@tarojs/taro'
let LOGIN_STATE={
    userInfo:Taro.getStorageSync('big_userinfo'),
    token:Taro.getStorageSync('big_token'),
}

export const user=(prvsate=LOGIN_STATE,action)=>{
    switch (action.type) {
        case USER_LOGIN:
            if(action.data.code===0){
                Taro.setStorageSync('big_token', action.data.result.token)
                Taro.setStorageSync('big_userinfo', action.data.result.userinfo)
                //Taro.navigateBack({delta: 1})
                return {
                    code:action.data.code,
                    message:action.data.message,
                    passWord:'',
                    phone:'',
                    userInfo:action.data.result.userinfo,
                    token:action.data.result.token
                }
            }else if(action.data.code===-1){
                Taro.showToast({title:action.data.message,icon:'none'})
                return {
                    ...prvsate,
                    ...action.newdata,
                    code:action.data.code,
                    message:action.data.message,
                }
            }
            return prvsate
        case USER_LOGOUT:
            if(action.data.code===0 || action.data.code===-9){
                Taro.removeStorage({
                    key:'big_token'
                })
                return {
                    ...prvsate,
                    code:action.data.code,
                    message:action.data.message,
                    passWord:'',
                    phone:'',
                    token:''
                }
            }else{
                Taro.showToast({title:action.data.message,icon:'none'})
            }
            return {
                ...prvsate,
                code:action.data.code,
                message:action.data.message,
            }
        default:
            return prvsate
    }
}