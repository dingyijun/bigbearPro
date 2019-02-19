import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'

export default class EpSelect extends Component {
  state = {
    selector: [['a','b'], ['c','d']],
    selectorChecked: '美国',
    timeSel: '12:01',
    dateSel: '2018-04-22'
  }
onChange = e => {
    console.log(e)
  }
  handle=e=>{
    console.log(e)
  }
render () {
    return (
      <View className='container'>
        <View className='page-body'>
            <View>
              <Picker 
              mode='multiSelector' 
              range={this.state.selector} 
              onChange={this.onChange}
              onColumnchange={this.handle}
              >
                <View className='picker'>
                  当前选择：{this.state.selectorChecked}
                </View>
              </Picker>
            </View>
          </View>
      </View>
    )
  }
}