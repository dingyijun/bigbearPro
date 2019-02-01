import Taro , { Component , Config } from '@tarojs/taro'
import Footer from './components/Footer'
import IndexC from './pages/index/index'
import HrC from './pages/hr/index'
import JobC from './pages/job/index'
import UserC from './pages/user/index'
import ManageC from './pages/manage/index'
import { View } from '@tarojs/components'

export default class Myapp extends Component{
    
    config: Config = {
        navigationBarTitleText:'灰熊先生'
    }

    constructor(){
        super(...arguments)
        this.state={
            current:0
        }
    }

    handelChange=(num:number)=>{
        let title=['灰熊先生','找工作','找人才','管理','用户中心']
        this.setState({
            current:num
        },()=>{
            Taro.setNavigationBarTitle({
                title:title[num]
              })
        })
    }
    render () {
        let {current,userInfo}=this.state
        return (
        <View>
            { current===0?<IndexC/>:'' }
            { current===1?<JobC/>:'' }
            { current===2?<HrC/>:'' }
            { current===3?<ManageC />:'' }
            { current===4?<UserC/>:'' }
            <Footer current={current} onChangePage={this.handelChange.bind(this)}/>
        </View>
        )
    }
}