import axios from './axios'
import router from '../router';

export async function _getData(url = '',method, data = {}, config = {}) {
    return await axios[method](url, {
        ... {},
        ...data
    }, config).then(data => {
        // console.log('1',data)
      if(data.data.code != 200){
        if(data.data.code==10010){
            window.localStorage.removeItem("sc_userInfo")
            router.push({path:"/teamlogin"})
        }else if(data.data.code==10013){
            window.localStorage.removeItem("sc_ad_userInfo")
            window.localStorage.removeItem("role")
            router.push({path:"/arealogin"})
        }else{
           router.app.$children[0].$message.error(data.data.msg)
           return Promise.reject(data);
        }
      }else{
           return data
      }

    }).catch(() => {
    })
}

// export async function _getDataAll(funArr = []) {
//     return await axios.all(funArr).then(axios.spread(function(acct, perms) {
//         // 两个请求现在都执行完成
//         return true
//     }));
// }