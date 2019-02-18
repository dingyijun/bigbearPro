import Taro , { Component , Config} from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import LoginFrom from '../../components/user/loginFrom'
import Logout from '../../components/user/logout'
import './index.less'
@connect((store)=>({
  ...store.user
}))
export default class UserC extends Component{
  config: Config = {
    navigationBarTitleText:'用户中心'
  }
  render () {
      Taro.showTabBarRedDot({index:4})
      if(!this.props.token){
        return (<LoginFrom />)
      }
      return (
        <View className='manage'>
        {Taro.getStorageSync('big_token')}
          <Logout/>
        </View>
      )
  }
}