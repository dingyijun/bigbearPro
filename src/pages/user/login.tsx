import Taro , { Component , Config } from '@tarojs/taro'
import LoginFrom from '../../components/user/loginFrom'
import { View } from '@tarojs/components'

export default class Login extends Component{

    config: Config = {
        navigationBarTitleText: '用户登录'
    }
    
    render(){
        return(
            <View>
                <LoginFrom />
            </View>
        )
    }
}