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
            userName:null,
            userPassword:null
        },
        validation:{
            userName:{v:true,m:''},
            userPassword:{v:false,m:''}
        }
    }
    onSubmit(e){
        this.props.login({userName:this.state.userInfo.userName})
    }
    validation=(type,value)=>{
        let {userName,userPassword}=this.state.validation

        switch(type){
            case 'un':
                if(value.length<1)
                    userName={v:false,m:'您并未输入任何内容'}
                else
                    userName={v:true,m:''}
            break
            case 'pwd':
                if(value.length<1)
                    userPassword={v:false,m:'您并未输入任何内容'}
                else
                    userPassword={v:true,m:''}
            break
            default:
            break
        }
        this.setState({
            validation:{
                userName:userName,
                userPassword:userPassword
            }
        })
        console.log(this.state)
    }
    handPassleChange(value){
        this.setState({
            userInfo:{
                ...this.state.userInfo,
                userPassword:value
            }
        })
    }
    handleNameChange(value){
        this.setState({
            userInfo:{
                ...this.state,
                userName:value
            }
        })
    }
    render(){
        return(
            
            <AtForm
        onSubmit={this.onSubmit.bind(this)}
      >
        <AtInput
          name='userName'
          title='账户'
          type='phone'
          placeholder='单行文本'
          onBlur={this.validation.bind(this,'un')}
          onChange={this.handleNameChange.bind(this)}
        />
        
        { !this.state.validation.userName.v?<View>{this.state.validation.userName.m}</View>:''}
        <AtInput
          name='userPassword'
          title='密码'
          type='password'
          placeholder='单行文本'
          onBlur={this.validation.bind(this,'pwd')}
          onChange={this.handPassleChange.bind(this)}
        />
        { !this.state.validation.userPassword.v?<View>{this.state.validation.userPassword.m}</View>:''}
        <AtButton formType='submit'>登录</AtButton>
      </AtForm>
        )
    }
}

export default LoginForm as ComponentClass