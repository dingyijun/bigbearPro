import Taro, { Component } from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import { Swiper, SwiperItem, Image } from '@tarojs/components'
export default class MySwiper extends Component {
  render () {
    return (
      <Swiper
        style='height:160px'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        circular
        indicatorDots
        autoplay>
        <SwiperItem>
          <Image style='width:100%;' src='https://s11.51cto.com/images/201808/29/ec35d5023b6d59313ae237a45ff70a1e.jpg'></Image>
        </SwiperItem>
        <SwiperItem>
        <Image style='width:100%;' src='https://s11.51cto.com/images/201703/c4521d257fbb61c814c4455f97b520accae896.png'></Image>
        </SwiperItem>
        <SwiperItem>
        <Image style='width:100%;' src='https://s11.51cto.com/images/201606/73b24bd5731cf7451cc510c96f150429d1540f.jpg'></Image>
        </SwiperItem>
      </Swiper>
    )
  }
}