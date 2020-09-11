import React, { Component } from 'react'
import "./detail.css"
//引入node.js平台截取路由字符串的信息
import querystrimg from "querystring"
//头部组件
import Header from "../../components/header/header"
//商品详情信息请求 商品添加请求
import { reqGoodsInfo, reqCartadd } from '../../util/request'
import img from "../../assets/img/1.jpg"
import dd from ".././../assets/img/img/cart_on.png"
import { successAlert } from '../../util/Alert'
export default class detail extends Component {
    constructor() {
        super()
        this.state = {
            // 底部规格样式显示与否 
            isShow: false,
            detail: {},
            des: "",
            num: 0
        }
    }
    componentDidMount() {
        //处理传递过来的参数 取出id
        const id = querystrimg.parse(this.props.location.search.slice(1)).id
        //发起请求获取商品详情
        reqGoodsInfo({ id: id }).then(res => {
            this.setState({
                detail: res.data.list[0],
                des: res.data.list[0].description

            })
        })
    }
    //显示底部商品规格
    show() {
        this.setState({
            isShow: true
        })
    }
    // 底部商品规格消失
    hide(e) {
        if (e.target.className === "cover") {
            this.setState({
                isShow: false
            })
        }
    }
    //点击添加购物车走请求
    carAdd() {
        //登陆时存储的用户的uid
        const uid = sessionStorage.getItem('isLogin')
        let obj = {
            uid,
            goodsid: this.state.detail.id,
            num: 1
        }
        console.log(obj);
        reqCartadd(obj).then(res => {
            console.log(res);
            successAlert("添加成功")
            this.setState({
                isShow:false
            })
        })
    }
    //点击了选择尺寸按钮
    changeSel(index) {
        this.setState({
            num: index
        })
    }
    render() {
        const { detail, isShow, num } = this.state
        //渲染des图片详情
        if (this.refs.des && this.state.des) {
            this.refs.des.innerHTML = this.state.des
        }
        return (
            <div className="detail">
                <Header title="商品详情" back></Header>
                <div className="imgbox">
                    <img src={detail.img} alt="" className="img" />
                    <br />
                    <div className="des">
                        <p className="name">
                            {detail.goodsname}
                        </p>
                        <span>
                            <img src={dd} alt="" className="like" />收藏
                        </span>
                        <p className="hot">
                            <i>￥{detail.price}</i>
                            {detail.ishot === 1 ? <em>热卖</em> : null}
                            {detail.isnew === 1 ? <em>新品</em> : null}
                        </p>
                        <p>
                            <del>￥{detail.market_price}</del>
                        </p>
                    </div>
                </div>
                {/* 图片详情 */}
                <div ref="des" className="desimg"></div>
                {/* 点击按钮弹出弹框 */}
                <p className="footer">
                    <span onClick={() => this.show()}>加入购物车</span>
                </p>
                {/* 底部 */}
                {
                    isShow ? (
                        <div className="cover" onClick={(e) => this.hide(e)}>
                            <div className="goods">
                                <div className="pic">
                                    <img src={img} alt="" />
                                    <span className="name">
                                        {detail.goodsname}
                                    </span>
                                </div>
                                <div className="size">
                                    <p>{detail.specsname}</p>
                                    <p>
                                        {/* 需要转成数组 */}
                                        {JSON.parse(detail.specsattr).map((item, index) => {
                                            return (
                                                <span key={item} onClick={() => this.changeSel(index)} className={num === index ? 'active' : ""}>{item}</span>
                                            )
                                        })}

                                    </p>
                                    <p className="car">
                                        <span onClick={() => this.carAdd()}>加入购物车</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : null
                }

            </div>


        )
    }
}
