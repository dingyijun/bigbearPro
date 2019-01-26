const APIROOT='http://www.bigbear.io/'
const TOKEN='sssdddff'
export let apiUrl={
    login:{
        url:APIROOT+'user/user/user',
        method:"GET",
        header:{token:TOKEN},
        data:{}
    }
}