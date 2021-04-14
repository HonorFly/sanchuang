import axios from './axios'
import router from '../router';

export async function _getData(url = '',method, data = {}, config = {}) {
    return await axios[method](url, {
        ... {},
        ...data
    }, config).then(data => {
        console.log(data)
        if(data.data.code==10010){
            router.push("/teamlogin")
            return 
        }
        if (data.code == 0 || data.code == 200) {
            // console.log(router)
            if (data.code == 200) {
                return data
            } else {
                return data.result
            }
        } else {
            //console.log(router)
            if (!(data.code == 1116 || data.code == 1106)) {
                // const v = router.app.$children[0];
                // v.$message.error(data.msg)
            }
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