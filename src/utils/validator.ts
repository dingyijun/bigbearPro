import Taro from '@tarojs/taro'
export const validator = {
  testRegex: (value, regex) => regex.test(value),
  rules: {
    required:(val,msg)=> {
      if(validator.testRegex(val, /.+/))return true
      Taro.showToast({title:msg,icon:'none'})
      return false
    },
    max:(val,options,msg) =>{
      if(val.length <= options)return true
      Taro.showToast({title:msg,icon:'none'})
      return false
    },
    min:(val,options,msg) => {
      if(val.length >= options)return true
      Taro.showToast({title:msg,icon:'none'})
      return false
    },
    email:(val,msg) => {
      if(validator.testRegex(val, /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i))return true
      Taro.showToast({title:msg,icon:'none'})
      return false
    },
    number:(val,msg) => {
      if(validator.testRegex(val,/^\d+.?\d*$/))return true
      Taro.showToast({title:msg,icon:'none'})
      return false
    },
    phone:(val,msg) => {
      if(validator.testRegex(val,/^1[3|5|7|8]\d{9}/))return true
      Taro.showToast({title:msg,icon:'none'})
      return false
    },
    url:(val,msg) => {
      if(validator.testRegex(val,/^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$/i))return true
      Taro.showToast({title:msg,icon:'none'})
      return false
    },
    accepted:(val) => val === true 
  }
}