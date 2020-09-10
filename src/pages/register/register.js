import React, { Component } from 'react'
import "./register.css"
import Header from "../../components/header/header"
import {reqRegister} from "../../util/request"
export default class register extends Component {
    constructor(){
        super()
        this.state={
            user:{
                phone:"",
                nickname:"",
                password:""
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
    reg(){
        reqRegister(this.state.user).then(res=>{
            if(res.data.code===200){
                this.props.history.push("/login")
            }else{
                alert(res.data.msg)
            }
        })
    }
    render() {
        const{user}=this.state
        return (
            <div >
                <div className="reg">
                   <Header title="注册" back></Header>
                    <div className="form">
                        <div className="inp">
                            手机号：<input type="text" value={user.phone} onChange={(e)=>this.changeUser(e,"phone")} />
                        </div>
                        <hr />
                        <div className="inp">
                            昵称：<input type="text" value={user.nickname} onChange={(e)=>this.changeUser(e,"nickname")} />
                        </div>
                        <hr />
                        <div className="inp">
                            密码:<input type="text" value={user.password} onChange={(e)=>this.changeUser(e,"password")} />
                        </div>
                        <hr />
                        <div>
                            <button onClick={()=>this.reg()}>注册</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
