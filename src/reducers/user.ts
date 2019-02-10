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
                    userInfo:action.data.result.userinfo,
                    token:action.data.result.token
                }
            }else{
                Taro.showToast({title:action.data.message,icon:'none'})
            }
            return {
                ...prvsate,
                ...action.newdata,
                code:action.data.code,
                message:action.data.message,
            }
        case USER_LOGOUT:
            if(action.data.code===0){
                Taro.setStorageSync('big_token', '')
                //Taro.setStorageSync('big_userinfo', '')
                
                return {
                    ...prvsate,
                    ...action.data,                
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