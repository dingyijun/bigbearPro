import Taro , { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import MySwiper from './main/MySwiper'
import MyMenuBar from './main/MyMenuBar'
import { View , Text } from '@tarojs/components';
import './main.less'
export default class Main extends Component {
  render () {
    return (
      <View>
        <MySwiper />
        <MyMenuBar />
        <View className='at-row'>
          <View className='at-col at-title'>最新招聘</View>
          <View className='at-col'><Text className='at-all'>查看全部</Text></View>
        </View>
      </View>
    )
  }
}