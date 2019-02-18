import Taro , { Component , Config } from '@tarojs/taro'
import MyMenuBar from '../../components/index/menuBar'
import MySwiper from '../../components/index/swiper'
import { View } from '@tarojs/components'

export default class IndexC extends Component{
  config: Config = {
    navigationBarTitleText:'灰熊先生'
  }

  render () {
    return (
      <View>
        <MyMenuBar /> 
        <MySwiper />
      </View>
    )
  }
}