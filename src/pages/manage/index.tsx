import {ComponentClass} from 'react'
import Taro , { Component } from '@tarojs/taro'
import { View ,} from '@tarojs/components'
import Imanage from '../../interfaces/Imanage'
import { connect } from '@tarojs/redux'
import LoginFrom from '../../components/user/loginFrom'
import Company from '../../components/manage/company';

@connect((store)=>({
  ...store.user
}))
class ManageC extends Component<Imanage>{
 
  render () {
    if(!this.props.token){
      return (<LoginFrom />)
    }
    return (
      <View className='manage'>
        <Company/>
      </View>
    )
  }
}

export default ManageC as ComponentClass