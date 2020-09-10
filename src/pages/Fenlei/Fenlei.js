import React, { Component } from 'react'
import "./Fenlei.css"
import Header from "../../components/header/header"
//假的图片
import {NavLink} from "react-router-dom"
import { reqCatetree } from "../../util/request"
export default class FenLei extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            n: 0,
        }
    }
    //挂载完成走请求
    componentDidMount() {
        reqCatetree().then(res => {
            console.log(res);
            this.setState({
                list: res.data.list,
            })
        })
    }
    //点击了对应的标题修改n的值
    changeN(index) {
        this.setState({
            n: index
        })
    }
    render() {
        const { list, n } = this.state
        return (
            <div className="fenlei">
                <Header title="商品分类" back></Header>
                <div className="con">
                    <div className="left">
                        <ul>
                            {
                                list.map((item, index) => {
                                    return (
                                        <li key={item.id} onClick={() => this.changeN(index)} className={n === index ? 'select' : null}>{item.catename}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="right">
                        {
                            list.length > 0 ? list[n].children.map(item => {
                                return <div key={item.id} className="box">
                                    <NavLink to={"/classgoods?id=" + item.id + "&name=" + item.catename}>
                                        <img src={item.img} alt="" />
                                        <p>{item.catename}</p>
                                    </NavLink>
                                </div>
                            }) : null
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}
