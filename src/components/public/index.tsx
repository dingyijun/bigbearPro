import Taro,{Component} from '@tarojs/taro'

import { View } from '@tarojs/components';

export class BgInput extends Component<IBgInput>{
    state={

    }
    render(){
        return(
            <View>{this.props.children}</View>
        )
    }
}