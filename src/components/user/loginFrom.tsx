import {ComponentClass} from 'react'
import Taro , { Component } from '@tarojs/taro'
import { AtForm ,AtButton,AtInput } from 'taro-ui'
import { connect } from '@tarojs/redux';
import {login} from '../../actions/user'
import ILoginFrom from '../../interfaces/Iuser'
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
        userInfo:{
            phone:null,
            passWord:null
        },
        validation:{
            phone:{v:0,m:'必填项'},
            passWord:{v:0,m:'必填项'}
        }
    }
    onSubmit(){
        let {phone,passWord}=this.state.userInfo
        this.props.login({phone,passWord})
    }
    validation=(type,value)=>{
        let {phone,passWord}=this.state.validation

        switch(type){
            case 'un':
                if(value.length<1)
                phone={v:-1,m:'您并未输入任何内容'}
                else
                phone={v:1,m:''}
            break
            case 'pwd':
                if(value.length<1)
                passWord={v:-1,m:'您并未输入任何内容'}
                else
                passWord={v:1,m:''}
            break
            default:
            break
        }
        this.setState({
            validation:{
                phone,
                passWord
            }
        })
    }
    handPassleChange(value){
        this.setState({
            userInfo:{
                ...this.state.userInfo,
                passWord:value
            }
        })
    }
    handleNameChange(value){
        this.setState({
            userInfo:{
                ...this.state,
                phone:value
            }
        })
    }
    render(){
        let {passWord,phone}=this.state.validation
        return(
            
            <AtForm
        onSubmit={this.onSubmit.bind(this)}
      >
        <AtInput
          name='phone'
          title='账户'
          type='phone'
          placeholder='单行文本'
          onBlur={this.validation.bind(this,'un')}
          onChange={this.handleNameChange.bind(this)}
        />
        { phone.v===-1?<View>{this.state.validation.phone.m}</View>:''}
        <AtInput
          name='passWord'
          title='密码'
          type='password'
          placeholder='单行文本'
          onBlur={this.validation.bind(this,'pwd')}
          onChange={this.handPassleChange.bind(this)}
        />
        { passWord.v===-1?<View>{this.state.validation.passWord.m}</View>:''}
        <AtButton formType='submit'>登录</AtButton>
      </AtForm>
        )
    }
}

export default LoginForm as ComponentClass