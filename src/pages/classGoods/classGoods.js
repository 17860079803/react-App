import React, { Component } from 'react'
import "./classGoods.css"
import Header from "../../components/header/header"
import { reqGetgoods } from "../../util/request"
import querystring from "querystring"
import { NavLink } from "react-router-dom"
export default class classGoods extends Component {
    constructor() {
        super()
        this.state = {
            list: [],
            name: ''
        }
    }
    componentDidMount() {
        const info = querystring.parse(this.props.location.search.slice(1))
        this.setState({
            name: info.name
        })
        reqGetgoods({ fid: info.id }).then(res => {
            this.setState({
                list: res.data.list
            })
        })
    }
    render() {
        const { name, list } = this.state
        return (
            <div className="ClassGoods">
                <nav>
                    <Header title={name} back></Header>
                </nav>
                <ul>
                    {
                        list.length > 0 ?
                            (list.map(item => {
                                return (
                                    <NavLink to={"/detail?id="+item.id} key={item.id}>
                                        <li>
                                            <img src={item.img} alt="" />
                                            <div>
                                                <p>{item.goodsname}</p>
                                                <p className="price">{item.price}</p>
                                                <span>立即抢购</span>
                                            </div>
                                        </li>
                                    </NavLink>
                                )
                            })) : null
                    }
                </ul>
            </div>
        )
    }
}