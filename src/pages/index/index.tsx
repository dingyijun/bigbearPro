import Taro , { Component } from '@tarojs/taro'
import MyMenuBar from '../../components/index/menuBar'
import MySwiper from '../../components/index/swiper'
import { View } from '@tarojs/components'

export default class IndexC extends Component{
  render () {
    return (
      <View>
        <MyMenuBar />
        <MySwiper />
      </View>
    )
  }
}