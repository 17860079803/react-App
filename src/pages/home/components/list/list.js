import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import "./list.css"
export default class list extends Component {
    render() {
        const { goods } = this.props
        return (
            <div className="list">
                <ul>
                    {
                        goods.map(item => {
                            return (
                                <li key={item.id}>
                                    <NavLink to={"/detail?id="+item.id}>
                                    <img src={item.img} alt="" />
                                    <div className="right">
                                        <p>{item.goodsname}</p>
                                        <span>￥{item.price}</span>
                                        <div className="btn">立即抢购</div>
                                    </div>
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
