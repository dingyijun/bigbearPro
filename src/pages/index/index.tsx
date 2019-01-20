import Taro , { Component , Config } from '@tarojs/taro'
import Main from '../../components/Main'
import Footer from '../../components/Footer'
import { View } from '@tarojs/components';

export default class Myapp extends Component{

  config: Config = {
    navigationBarTitleText: '首页'
  }

  render () {
    return (
      <View>
        <Main />
        <Footer />
      </View>
    )
  }
}