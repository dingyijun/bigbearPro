import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components';

export default class Login extends Component{
    handleReg=()=>{
        console.log('dsds')
        Taro.navigateTo({url:'../index/index'})
    }
    render(){
        return(
            <View  onClick={this.handleReg}>
                <text>Resigen</text>
            </View>
        )
    }
}