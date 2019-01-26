import { USER_LOGIN } from '../constants/counter'

let LOGIN_STATE={
    "code":-1,
    "msg":"init",
    "info":{}
}

export const user=(prvsate=LOGIN_STATE,action)=>{
    switch (action.type) {
        case USER_LOGIN:
            return{
                ...prvsate,
                ...action.data
            }
    
        default:
            return prvsate
    }
}