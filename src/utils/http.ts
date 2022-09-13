import * as qs from "qs"

const apiUrl = "http://localhost:8000"
interface Config extends RequestInit {
    token?:string,
    data?:object
}
export const http = async(endpoint:string,{data,token,headers,...customConfig}:Config)=>{
    const config = {
        method:'GET',
        headers:{
            Authorization:token?`Bearer${token}`:'',
            'Context-Type':data?'application/json':''
        },
        ...customConfig
    }
    if(config.method.toUpperCase() ==="GET"){
        endpoint += `?${qs.stringify(data)}`
    }else{
        config.body = JSON.stringify(data|| {})
    }
    return window.fetch(`${apiUrl}/${endpoint}`,{})
}