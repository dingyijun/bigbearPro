import Taro , { Component , Config } from '@tarojs/taro'
import LoginFrom from '../../components/user/loginFrom'

export default class Login extends Component{

    config: Config = {
        navigationBarTitleText: '用户登录'
    }
    
    render(){
        return(
            <LoginFrom />
        )
    }
}