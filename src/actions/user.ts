import { USER_LOGIN } from '../constants/counter'
import { getRequest } from '../until/request'
import { apiUrl } from '../until/api'

export function login(param){
    return async (dispatch)=>{
      let result:any =await getRequest({...apiUrl.login,data:{...param,deviceId:'weapp'})
      return dispatch({
        type:USER_LOGIN,
        data:result.data
      })
  }
}
