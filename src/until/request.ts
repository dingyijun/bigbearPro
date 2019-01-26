import Taro from '@tarojs/taro'


export  const getRequest=(
    url:string,
    method: "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined,
    header:{},
    data?:object|string|ArrayBuffer,
    )=>{
    return Taro.request({url,data,header,method})
}
