import {ComponentClass} from 'react'
import Taro , { Component } from '@tarojs/taro'
import { AtForm ,AtButton,AtInput } from 'taro-ui'
import { connect } from '@tarojs/redux';
import {login} from '../../actions/user'
import ILoginFrom from '../../interfaces/Iuser'
import {validator} from '../../utils/validator'
import './loginFrom.less'
import { View } from '@tarojs/components';

@connect((store)=>({
    user:store.user
}),(dispatch)=>({
    login:(param)=>{
        dispatch(login(param))
    }
}))
class LoginForm extends Component<ILoginFrom>{
    state={
        phone:'',
        passWord:''
    }
    onSubmit(e){
        e.preventDefault()
        let {passWord,phone}=this.state
        validator.rules.phone(phone,'账号：为11位手机号码')&&
        validator.rules.min(passWord,6,'密码：不能少于6位')&&
        validator.rules.max(passWord,16,'密码：不能超出16位')&&
        this.todoLogin()
    }
    
    todoLogin=(){
        let {passWord,phone}=this.state
        if(this.props.user.phone === phone && this.props.user.passWord === passWord && this.props.user.code === -1){
            Taro.showToast({title:this.props.user.message,icon:'none'})
            return
        }
        this.props.login({passWord,phone})
        
    }

    handleNameChange=(value):void=>{
        this.setState({
            phone:value
        })
    }
    
    handPassleChange=(value):void=>{
        this.setState({
            passWord:value
        })
    }

    render(){
        let {phone,passWord}=this.state
        return(
            <View>
                <AtInput
                name='phone'
                title='账户'
                type='phone'
                placeholder='输入11位手机号'
                value={phone}
                onChange={this.handleNameChange.bind(this)}
                />
                <AtInput
                name='passWord'
                title='密码'
                type='password'
                placeholder='输入6-16位密码'
                value={passWord}
                onChange={this.handPassleChange.bind(this)}
                />
                <AtButton onClick={this.onSubmit.bind(this)}>登录</AtButton>
            </View>
        )
    }
}

export default LoginForm as ComponentClass