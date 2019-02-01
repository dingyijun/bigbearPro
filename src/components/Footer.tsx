import Taro,{Component} from '@tarojs/taro'
import { AtTabBar }  from 'taro-ui'
import Ifooter from '../interfaces/Iindex'

export default class Footer extends Component<Ifooter>{
  handleClick (value:number) {
    this.props.onChangePage(value)
  }
  render () {
    const {current} = this.props
    
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