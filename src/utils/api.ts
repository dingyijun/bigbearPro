const APIROOT='https://proapi.dhxhr.com/'

let urlInfo={
    url:'',
    method:'GET',
    header:{
        'MG_code':'5uwPulFblsIANI7BIP#a%bBo582#wOud3v%f0c1JgJRskqUTN7y4&TPUTgjkmhOjZI#oVc4Ph4Ar^ApQFy$ZlGl3T9MaIskgGWTVjqHxsP^8S^%gY#nAj9X4DV9x&b7O',
        'MG_key':'5b10fed636fcf',
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Credentials':'true',
    },
    data:{}
}
export let apiUrl={
    login:{
        ...urlInfo,
        url:APIROOT+'users/user/login',
        method:'POST',
    },
    logout:{
        ...urlInfo,
        url:APIROOT+'users/user/logout'
    }
}