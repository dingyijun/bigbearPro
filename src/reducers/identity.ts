import { USER_IDENTITY } from '../constants/counter'
import Taro from '@tarojs/taro'
const IDENTITY_STATE={
    has:0,
    parentValue:[{type:'eps',name:'我的企业'},{type:'scs',name:'我的学校'}],
    childValue:[],
}
export const identity=(prvstate=IDENTITY_STATE,action)=>{
    switch(action.type){
        case USER_IDENTITY:
            switch(action.data.code){
                case 0:
                    return {
                        ...prvstate,
                        has:1,
                        childValue:[action.data.result.eps,action.data.result.scs]
                    }
                case 9:
                    return {
                        IDENTITY_STATE
                    }
            }
        default :
        return prvstate
    }
}