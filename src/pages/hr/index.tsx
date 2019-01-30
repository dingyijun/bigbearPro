import Taro , { Component , Config } from '@tarojs/taro'
import { View,Button } from '@tarojs/components';

export default class HrC extends Component{
  handleLogin=()=>{
    console.log(1)
    Taro.login({
      success(res) {
        console.log(res)
      }
    })
  }

  render () {
    return (
      <View>
        人才招聘
        <Button onClick={this.handleLogin.bind(this)}>微信登陆</Button>
      </View>
    )
  }
}