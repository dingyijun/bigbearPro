import Taro, { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import MySwiper from './MySwiper'
import MyMenuBar from './MyMenuBar'
import { View, Text } from '_@tarojs_components@1.2.7@@tarojs/components/types';
import { AtGrid } from "taro-ui"
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
        <View>
            <View>公司招聘钳工20名</View>
            <View>公司招聘钳工20名</View>
            <View>公司招聘钳工20名</View>
            <View>公司招聘钳工20名</View>
            <View>公司招聘钳工20名</View>
            <View>公司招聘钳工20名</View>
          </View>
        <View className='at-row'>
          <View className='at-col at-title'>最新求职</View>
          <View className='at-col'><Text className='at-all'>查看全部</Text></View>
        </View>
        <View>
            <View>公司招聘钳工20名</View>
            <View>公司招聘钳工20名</View>
            <View>公司招聘钳工20名</View>
            <View>公司招聘钳工20名</View>
            <View>公司招聘钳工20名</View>
            <View>公司招聘钳工20名</View>
          </View>
        <View className='at-row'>
          <View className='at-col at-title'>推荐简历</View>
          <View className='at-col'><Text className='at-all'>查看全部</Text></View>
        </View>
        <AtGrid 
        hasBorder={false} 
        columnNum={4}
        data={
  [
    {
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
      value: '领取中心'
    },
    {
      image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
      value: '找折扣'
    },
    {
      image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
      value: '领会员'
    },
    {
      image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
      value: '新品首发'
    }
  ]
} />
      </View>
    )
  }
}