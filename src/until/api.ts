const APIROOT='http://127.0.0.1/'
const TOKEN='sssdddff'
export let apiUrl={
    login:{
        url:APIROOT+'json.php',
        method:'POST',
        header:{token:TOKEN},
        data:{}
    }
}