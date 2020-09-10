import React, { Component } from 'react'
import "./register.css"
import Header from "../../components/header/header"
import { reqRegister } from "../../util/request"
import { successAlert } from "../../util/Alert"
export default class register extends Component {
    constructor() {
        super()
        this.state = {
            user: {
                phone: "",
                nickname: "",
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
    //点击注册的时候发起请求
    reg() {
        let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        let passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
        if (!myreg.test(this.state.user.phone)) {
            successAlert("手机号格式不正确请重新输入")
        } else if (!passReg.test(this.state.user.password)) {
            successAlert("密码至少8-16个字符，至少1个大写字母，1个小写字母和1个数字")
        }
        else {
            reqRegister(this.state.user).then(res => {
                if (res.data.code === 200) {
                    successAlert("注册成功")
                    this.props.history.push("/login")
                } else {
                    successAlert(res.data.msg)
                }
            })
        }
    }
    render() {
        const { user } = this.state
        return (
            <div >
                <div className="reg">
                    <Header title="注册" back></Header>
                    <div className="form">
                        <div className="inp">
                            手机号：<input type="text" value={user.phone} onChange={(e) => this.changeUser(e, "phone")} />
                        </div>
                        <hr />
                        <div className="inp">
                            昵称：<input type="text" value={user.nickname} onChange={(e) => this.changeUser(e, "nickname")} />
                        </div>
                        <hr />
                        <div className="inp">
                            密码:<input type="password" value={user.password} onChange={(e) => this.changeUser(e, "password")} />
                        </div>
                        <hr />
                        <div>
                            <button onClick={() => this.reg()}>注册</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
