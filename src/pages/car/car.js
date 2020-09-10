import React, { Component } from 'react'
import "./car.css"
import house from "../../assets/img/store.png"
import img from "../../assets/img/1.jpg"
// import nosel from "../../assets/img/radio_nor.png"
import sel from "../../assets/img/radio_hig.png"
import edit from "../../assets/img/editor_hig.png"
// import noedit from "../../assets/img/editor_nor.png"
import Header from "../../components/header/header"
export default class car extends Component {
    render() {
        return (
            <div className="car">
               <Header title="购物车" back></Header>
                <ul>
                    <li>
                        <div className="inner">
                            <p className="tit">
                                <img src={house} alt="" />杭州保税区仓库</p>
                            {/* 删除的类名是box-del,非删除是box */}
                            <div className="box">
                                <img src={sel} alt="" className="pic" />
                                {/* <img src={nosel} alt="" className="pic" /> */}
                                <img src={img} alt="" className="one" />
                                <div className="des">
                                    <p>雪豹秋日男装</p>
                                    <p>
                                        <span>-</span>
                                        <span>1</span>
                                        <span>+</span>
                                    </p>
                                    <p>总价：￥399.00</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="inner">
                            <p className="tit">
                                <img src={house} alt="" />杭州保税区仓库</p>
                            {/* 删除的类名是box-del,非删除是box */}
                            <div className="box">
                                <img src={sel} alt="" className="pic" />
                                {/* <img src={nosel} alt="" className="pic" /> */}
                                <img src={img} alt="" className="one" />
                                <div className="des">
                                    <p>雪豹秋日男装</p>
                                    <p>
                                        <span>-</span>
                                        <span>1</span>
                                        <span>+</span>
                                    </p>
                                    <p>总价：￥399.00</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="inner">
                            <p className="tit">
                                <img src={house} alt="" />杭州保税区仓库</p>
                            {/* 删除的类名是box-del,非删除是box */}
                            <div className="box">
                                <img src={sel} alt="" className="pic" />
                                {/* <img src={nosel} alt="" className="pic" /> */}
                                <img src={img} alt="" className="one" />
                                <div className="des">
                                    <p>雪豹秋日男装</p>
                                    <p>
                                        <span>-</span>
                                        <span>1</span>
                                        <span>+</span>
                                    </p>
                                    <p>总价：￥399.00</p>
                                </div>
                                <span className="price">￥399.00</span>
                                <span className="del">删除</span>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="footer">
                    <div className="all">
                        <img src={sel} alt="" />
                        <div>全选</div>
                    </div>
                    <div className="all" >
                        <img src={edit} alt="" />
                        <div>编辑</div>
                    </div>
                    <div className="all">合计：￥235.00</div>
                    <div className="sum">去结算</div>
                </div>
            </div>
        )
    }
}
