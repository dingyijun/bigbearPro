import Taro from '@tarojs/taro'

export  const getRequest=(param)=>{
    const tkouttime = new Date().getTime();
    return new Promise((resolve, reject) => {
        if(param.method==='GET'){
            param.data={
                ...param.data,
                tkouttime
            }
        }else{
            param.url+='?tkouttime='+tkouttime
        }
        Taro.request(param).then((result)=>{
            if(result&&result.data&&result.statusCode===200)
                return resolve(result)
            else
                throw('网络异常')
        }).catch((err)=>{
            Taro.showToast({
                title:err?err:'网络异常',
                icon:'none'
            })
            reject(err)
        })
    }
}
