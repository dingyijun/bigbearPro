import Taro , { Component } from '@tarojs/taro'
import { AtForm ,AtButton,AtInput } from 'taro-ui'
import { connect } from '@tarojs/redux';
import {login} from '../../actions/user'



@connect((store)=>({
    user:store.user
}),(dispatch)=>({
    login:(param)=>{
        dispatch(login(param))
    }
}))
export default class LoginForm extends Component{
    state={
        userName:null,
        userPassword:null
    }
    onSubmit(e){
        this.props.login({userName:this.state.userName})
    }
    handPassleChange(value){
        this.setState({
            ...this.state,
            userPassword:value
        })
    }
    handleNameChange(value){
        this.setState({
            ...this.state,
            userName:value
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
          onChange={this.handleNameChange.bind(this)}
        />
        <AtInput
          name='userPassword'
          title='密码'
          type='password'
          placeholder='单行文本'
          onChange={this.handPassleChange.bind(this)}
        />
        <AtButton formType='submit'>登录</AtButton>
      </AtForm>
        )
    }
}