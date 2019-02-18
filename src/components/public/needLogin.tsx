import Taro,{Component} from '@tarojs/taro'
import {View,Image,Button} from '@tarojs/components'
import { AtIcon  } from 'taro-ui'
import lockimg from '../../asset/please.jpg'
import './needLogin.less'

export default class NeedLogin extends Component{
    handeleLoginOther=()=>{
        Taro.navigateTo({url:'../../pages/user/login'});
    }
    render(){
        return(
            <View className="need_login">
                <Image 
                className='lockimg'
                src={lockimg}
                />
                <View className='msg'>抱歉：需要登录后操作</View>
                <View className='login_wx'>微信快速登录</View>
                <View className='login_other' onClick={this.handeleLoginOther.bind(this)}>手机验证登录/注册</View>
            </View>
        )
    }
}