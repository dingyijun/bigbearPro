import Taro from '@tarojs/taro'
import { AtTabBar }  from 'taro-ui'

export default class Footer extends Taro.Component{

  handleClick (value:number) {
    this.props.onChangePage(value)
  }
  render () {
    const { current }:number = this.props
    return (
      <AtTabBar
        fixed
        color='#999999'
        iconSize={20}
        fontSize={10}
        backgroundColor='#EEEEEE'
        tabList={[
          { title: '首页', iconType: 'home', text: 'new' },
          { title: '求职', iconType: 'edit' },
          { title: '招聘', iconType: 'calendar', },
          { title: '管理', iconType: 'bullet-list', },
          { title: '我的', iconType: 'user', text: '100', max: 99 }
        ]}
        onClick={this.handleClick.bind(this)}
        current={current}
      />
    )
  }
}