import Taro , { Component , Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class JobC extends Component{
  config: Config = {
    navigationBarTitleText:'找人才'
  }
  render () {
    return (
      <View>
        找工作
      </View>
    )
  }
}