import axios from "axios"
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const errorHaddle = (status, info) => {
    switch (status) {
        case 400:
            console.log("语义有误");
            break;
        case 401:
            console.log("服务器认证失败");
            window.location.replace("/login/")
            break;
        case 403:
            console.log("服务器拒绝访问");
            break;
        case 404:
            console.log("地址错误");
            break;
        case 500:
            console.log("服务器遇到意外");
            break;
        case 502:
            console.log("服务器无响应");
            break;
        default:
            console.log(info);
            break;
    }
}

const instance = axios.create({
    //网络请求的公共配置
    timeout: 5000,
})

//发送数据之前拦截器
instance.interceptors.request.use(
    config => {
        if (window.localStorage.token) {
            config.headers['Authorization'] = "token " + window.localStorage.token
          }

        return config;
    },
    error => {
        return Promise.reject(error)
    }
)
//获取数据之后拦截器
instance.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        const { response } = error;
        errorHaddle(response.status, response.info)
        return Promise.reject(error);
    }
)

export default instance;