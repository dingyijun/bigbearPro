import Taro , {Component} from '@tarojs/taro'
import { View , Text } from '@tarojs/components';
import { AtAvatar , AtIcon , AtNoticebar ,AtGrid } from 'taro-ui'
import './company.less'

class Company extends Component{
    render(){
        return(
            <View className='my_company'>
                <View className='my_cp_head'>
                    <AtAvatar image='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'></AtAvatar>
                    <View className='my_cp_h_info'>
                        <Text className='title'>江苏大灰熊科技有限公司</Text>
                        <Text>人事部/人事主管</Text>
                    </View>
                    <View className='my_cp_h_check' >
                        <AtIcon value='chevron-down' size='30' color='#666666'></AtIcon>
                    </View>
                </View>
                <View className='my_cp_notic'>
                    <AtNoticebar icon='volume-plus' marquee>
                    这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
                    </AtNoticebar>
                </View>
                <View className='my_cp_list'>
                    <View>
                    <AtGrid mode='rect' columnNum={3} hasBorder={false} data={
                    [
                        {
                        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                        value: '组织架构'
                        },
                        {
                        image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                        value: '实习管理'
                        },
                        {
                        image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                        value: '招聘管理'
                        },
                        {
                        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                        value: '基本设置'
                        },
                        {
                        image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                        value: '系统设置'
                        },
                        {
                        image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                        value: '手机馆'
                        }
                    ]
                    } />
                    </View>
                </View>
            </View>
        )
    }
}

export default Company