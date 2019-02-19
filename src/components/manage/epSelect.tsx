import Taro, { Component } from '@tarojs/taro'
import { View, Text , Picker } from '@tarojs/components'
import { connect } from '@tarojs/redux';
import { identity } from '../../actions/identity'

@connect((store)=>({
  ...store.identity
}),(dispatch)=>({
  getidentity:()=>{
    dispatch(identity())
  }
}))
export default class EpSelect extends Component {
  
  constructor(){
    super(...arguments)
    this.props.getidentity()//get user identity
    
  }
  
  onChange=(e)=>{
    console.log(e.detail.value)
  }

  render () {
    console.log(this.props)
    return (
      <View className='container'>
        <View className='page-body'>
            <View>
              <Picker 
              mode='multiSelector' 
              range={[this.props.parentValue,this.props.childValue[0]]} 
              onChange={this.onChange}
              rangeKey='name'
              >
                <View className='picker'>
                  当前选择：{this.props.msg}
                </View>
              </Picker>
            </View>
          </View>
      </View>
    )
  }
}