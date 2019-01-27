import { USER_LOGIN } from '../constants/counter'

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