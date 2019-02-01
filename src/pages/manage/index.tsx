import Taro , { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Imanage from '../../interfaces/Imanage'
import { connect } from '@tarojs/redux';

@connect((store)=>({
  ...store.user
}))
export default class ManageC extends Component<Imanage>{
 
  render () {
    const {token,userInfo}=this.props
    return (
      <View>
        管理
        {token&&userInfo?'':<View>dfdfs</View>}
      </View>
    )
  }
}