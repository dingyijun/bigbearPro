import { USER_IDENTITY } from '../constants/counter'
import { getRequest } from '../utils/request'
import { apiUrl } from '../utils/api'

export function identity(){
  return async (dispatch)=>{
    let result:any =await getRequest({...apiUrl.identity,data:{}})
    return dispatch({
      type:USER_IDENTITY,
      data:result.data
    })
  }
}

