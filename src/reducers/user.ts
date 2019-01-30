import { USER_LOGIN } from '../constants/counter'
import Taro from '@tarojs/taro'
let LOGIN_STATE={
    phone:'',
    passWord:'',
    code:-1,
    message:''
}

export const user=(prvsate=LOGIN_STATE,action)=>{
    switch (action.type) {
        case USER_LOGIN:
            if(action.data.code===0){
                Taro.setStorageSync('big_token', action.data.result.token)
            }else{
                Taro.showToast({title:action.data.message,icon:'none'})
            }
            return {
                ...action.newdata,
                code:action.data.code,
                message:action.data.message
            }
    
        default:
            return prvsate
    }
}