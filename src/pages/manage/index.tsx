import Taro , { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Imanage from '../../interfaces/Imanage'

export default class ManageC extends Component<Imanage>{

  render () {
    console.log(this.props)
    return (
      <View>
        管理
      </View>
    )
  }
}