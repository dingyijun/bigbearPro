import { USER_LOGIN , USER_LOGOUT } from '../constants/counter'
import { getRequest } from '../utils/request'
import { apiUrl } from '../utils/api'

export function login(param){
    return async (dispatch)=>{
      let result:any =await getRequest({...apiUrl.login,data:{...param,deviceId:'weapp'}})
      return dispatch({
        type:USER_LOGIN,
        data:result.data,
        newdata:param
      })
  }
}

export function logout(){
  return async (dispatch)=>{
    let result:any =await getRequest({...apiUrl.logout,data:{}})
    return dispatch({
      type:USER_LOGOUT,
      data:result.data
    })
}
}

