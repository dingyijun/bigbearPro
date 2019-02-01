import Taro , { Component , Config } from '@tarojs/taro'
import { View,Text } from '@tarojs/components'
import { connect } from '@tarojs/redux';

@connect((store)=>({
  ...store.user
}))
export default class UserC extends Component{
  componentDidMount(){
    if(!this.props.token || !this.props.userInfo)Taro.navigateTo({url:'./pages/user/login'})
  }
  render () {
    return (
      <View>
        {this.props.userInfo.phone}
        <Text onClick={this.login.bind(this)}>登录</Text>
      </View>
    )
  }
}