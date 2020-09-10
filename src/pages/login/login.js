import React, { Component } from 'react'
import "./login.css"
//引入登录请求
import { reqLogin } from "../../util/request"
//引入alert弹窗
import { successAlert } from "../../util/Alert"
//
import {NavLink} from "react-router-dom"
export default class login extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                password: ""
            }
        }
    }
    //修改state
    changeUser(e, key) {
        this.setState({
            user: {
                ...this.state.user,
                [key]: e.target.value
            }
        })
    }
    //点击登录的时候发起请求
    login() {
        let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(this.state.user.phone)) {
            successAlert("手机号格式不正确请重新输入")
        } else {
            reqLogin(this.state.user).then(res => {
                if (res.data.code === 200) {
                    //存储uid
                    sessionStorage.setItem("isLogin", res.data.list.uid)
                    //存储token到本地存储
                    sessionStorage.setItem("token", res.data.list.token)
                    successAlert("登录成功")
                    this.props.history.push("/index")
                } else {
                    successAlert(res.data.msg)
                }
            })
        }

    }
    render() {
        const { user } = this.state
        return (
            <div className="login">
                <nav>登录</nav>
                <NavLink to={"/register"}><span className="reg">注册</span></NavLink>
                <div className="form">
                    <div className="inp">
                        账号：<input type="text" value={user.phone} onChange={(e) => this.changeUser(e, "phone")} />
                    </div>
                    <hr />
                    <div className="inp">
                        密码：<input type="password" value={user.password} onChange={(e) => this.changeUser(e, "password")} />
                    </div>
                    <hr />
                    <div className="inp pass">
                        <span> 忘记密码</span>
                    </div>
                    <div>
                        <button onClick={() => this.login()}>登录</button>
                    </div>
                </div>
            </div>
        )
    }
}
