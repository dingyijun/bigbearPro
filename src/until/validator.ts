const utils = {
  testRegex: (value, regex) => regex.test(value),
  rules: {
    required: {
      message: 'The :attribute field is required',
      rule: val => utils.testRegex(val, /.+/),
    },
    max: {
      message: 'The :attribute may not be greater than :max characters',
      rule: (val, options) => val.length <= options[0],
      messageReplace: (message, options) => message.replace(':max', options[0]),
    },
    min: {
      message: 'The :attribute may not be greater than :mix characters',
      rule: (val, options) => val.length >= options[0],
      messageReplace: (message, options) => message.replace(':min', options[0]),
    },
    email: {
      message: 'The :attribute must be a valid email address',
      rule: val => utils.testRegex(val, /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i), 
    },
    number: {
      message: 'The :attribute must be a number', 
      rule: (val) => utils.testRegex(val,/^\d+.?\d*$/)
    },
    phone: {
      message: 'The :attribute must be a valid phone number', 
      rule: (val) => utils.testRegex(val,/^1[3|5|7|8]\d{9}/)  
    },
    url: {
      message: 'The :attribute must be a valid url', 
      rule: (val) => utils.testRegex(val,/^(https?|ftp):\/\/(-\.)?([^\s/?\.#-]+\.?)+(\/[^\s]*)?$/i)  
    },
    accepted: {
      message: 'The :attribute must be a accepted', 
      rule: (val) => val === true  
    }
  },
}


export const validators=(value,type,errmsg)=>{
  switch(type){
    case 'phone':
    console.log(utils.rules.phone.rule(value))
    return !utils.rules.phone.rule(value)?errmsg:''
  }
}