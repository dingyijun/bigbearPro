import { USER_LOGIN } from '../constants/counter'
import Taro from '@tarojs/taro'
let LOGIN_STATE={
    getinfo:{
        "status":-1,
        "message":"init",
        "data":{}
    }
}

export const user=(prvsate=LOGIN_STATE,action)=>{
    switch (action.type) {
        case USER_LOGIN:
            if(action.data.code===0)Taro.setStorageSync('big_token', action.data.result.token)
            return{
                ...prvsate
                ,
                getinfo:{
                ...prvsate.getinfo,
                ...action.data
                }
            }
    
        default:
            return prvsate
    }
}