import React, { Component } from 'react'
import Header from "../../components/header/header"
import Banner from "./components/banner/banner"
import List from "./components/list/list"
import Nav from "./components/nav/nav"
import { reqBanner, reqGoods } from "../../util/request"
export default class home extends Component {
    constructor() {
        super()
        this.state = {
            //轮播图列表
            banner: [],
            //商品列表
            goods: []
        }
    }
    componentDidMount() {
        reqBanner().then(res => {
            this.setState({
                banner: res.data.list
            })
        })
        reqGoods().then(res => {
            this.setState({
                goods: res.data.list[0].content
            })
        })
    }
    render() {
        const { banner, goods } = this.state
        return (
            <div>
                <Header title="首页"></Header>
                {banner.length > 0 ? <Banner banner={banner}></Banner> : null}
                <Nav></Nav>
                {goods.length > 0 ? <List goods={goods}></List> : null}
            </div>
        )
    }
}
