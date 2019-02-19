import {ComponentClass} from 'react'
import Taro , { Component , Config } from '@tarojs/taro'
import { View ,} from '@tarojs/components'
import Imanage from '../../interfaces/Imanage'
import { connect } from '@tarojs/redux'
import NeedLogin from '../../components/public/needLogin'
import Company from '../../components/manage/company'
import EpSelect from '../../components/manage/epSelect'

@connect((store)=>({
  ...store.user
}))
class ManageC extends Component<Imanage>{
  config: Config = {
    navigationBarTitleText:'管理项'
  }
  render () {
    Taro.setTabBarBadge({index:3,text:'99'})
    if(!this.props.token){
      return (<NeedLogin />)
    }
    return (
      <View className='manage'>
        <EpSelect/>
        <Company/>
      </View>
    )
  }
}

export default ManageC as ComponentClass