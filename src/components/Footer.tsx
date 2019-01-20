import Taro from '@tarojs/taro'
import { AtTabBar }  from 'taro-ui'

export default class Footer extends Taro.Component{

  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  render () {
    const { current } = this.state
    return (
      <AtTabBar
        fixed
        tabList={[
          { title: '首页', iconType: 'home', text: 'new' },
          { title: '实习生', iconType: 'sketch' },
          { title: '我的', iconType: 'user', text: '100', max: 99 }
        ]}
        onClick={this.handleClick.bind(this)}
        current={current}
      />
    )
  }
}