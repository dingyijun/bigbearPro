import { ComponentClass } from 'react'
import Taro,{ Component } from '@tarojs/taro'
import { Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { logout } from '../../actions/user'

@connect((store)=>({
    ...store.user
}),(dispatch)=>({
    logout:()=>{
        dispatch(logout())
    }
}))
class Logout extends Component{
    logout=()=>{
        this.props.logout()
    }
    render(){
        return (
            <Button
            size='default'
            type= 'warn'
            onClick={this.logout.bind(this)}
            >
            退出
            </Button>
        )
    }
}

export default Logout as ComponentClass