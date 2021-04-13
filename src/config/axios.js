import axios from 'axios'

const instance = axios.create({
    timeout:5000,//请求超时时间
    withCredentials:true,// 是否携带cookie信息
    responseType:'json',
    baseURL:"/api",//如果url不是绝对路径，那么会将baseURL和url拼接作为请求的接口地址
    headers:{
        'Content-Type':'application/json'
    }
});

//添加请求拦截器
instance.interceptors.request.use(function(config) {
    config.transformRequest = [
            (data) => {
                // console.log(data)
                return JSON.stringify(data)
            }
    ]
    return config;

}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


// 添加响应拦截器
instance.interceptors.response.use(function(response) {
    console.log("响应：",response)
    return response
}, function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default instance