import axios from "axios"
import qs from "qs"
import { successAlert } from "./Alert"
//请求拦截
axios.interceptors.request.use(config => {
    //从本地仓库取出token
    const token = sessionStorage.getItem("token")
    //如果去的是login和register不需要携带请求头直接return
    if (config.url === "http://localhost:3000/api/login" && config.url === "http://localhost:3000/api/register") {
        return config
    }
    //去的是其他页面则携带请求头
    config.headers.authorization = token
    return config;
})

//响应拦截
axios.interceptors.response.use(res => {
    if (res.data.msg === "登录已过期或访问权限受限") {
        successAlert("登录已过期或访问权限受限")
        this.props.history.push('/login')
        return;
    }
    return res
})
//注册
export const reqRegister = (params) => {
    return axios({
        url: "/api/register",
        method: "post",
        data: qs.stringify(params)
    })
}
//登录
export const reqLogin = (params) => {
    return axios({
        url: "/api/login",
        method: "post",
        data: qs.stringify(params)
    })
}
//banner的请求
export const reqBanner = (params) => {
    return axios({
        url: "/api/getbanner",
        method: "get",
        params
    })
}

//home 页面列表数据请求
export const reqGoods = (params) => {
    return axios({
        url: "/api/getindexgoods",
        method: "get",
        params
    })
}
//获取商品详情
export const reqGoodsInfo = (params) => {
    return axios({
        url: "/api/getgoodsinfo",
        method: "get",
        params
    })
}
//商品添加购物车
export const reqCartadd = (params) => {
    return axios({
        url: "/api/cartadd",
        method: "post",
        data: qs.stringify(params)
    })
}
//获取分类结构
export const reqCatetree = (params) => {
    return axios({
        url: "/api/getcatetree",
        method: "get",
        params
    })
}
//获取分类商品
export const reqGetgoods = (params) => {
    return axios({
        url: "/api/getgoods",
        method: "get",
        params
    })
}