import { USER_LOGIN } from '../constants/counter'
import { getRequest } from '../until/request'
import { apiUrl } from '../until/api'
export const login = (param:object) => {
  return async dispatch=>{
    let result= await getRequest(apiUrl.login)
  }
}
