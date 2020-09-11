import React, { Component } from 'react'
import "./car.css"
import house from "../../assets/img/store.png"
import nosel from "../../assets/img/radio_nor.png"
import sel from "../../assets/img/radio_hig.png"
import edit from "../../assets/img/editor_hig.png"
import noedit from "../../assets/img/editor_nor.png"
import Header from "../../components/header/header"
//引入购物车请求
import { reqCartlist, reqCartdelete, reqCartedit } from "../../util/request"
import { successAlert } from "../../util/Alert"
export default class car extends Component {
    constructor() {
        super();
        this.state = {
            carlist: [],
            // 阻止按钮连续点击
            isClick: true,
            //全选
            isAll: false,
            //编辑
            isEditor: false,
            //总价
            allNum: 0
        }
    }
    //页面渲染完成
    componentDidMount() {
        this.listAdd()
    }
    // 获取购物车列表
    listAdd() {
        const uid = sessionStorage.getItem("isLogin")
        reqCartlist({ uid: uid }).then(res => {
            let list = res.data.list
            list.forEach(item => {
                item.isCheck = false
            })
            this.setState({
                carlist: list
            })
        })
    }
    //商品添加
    addGoods(id) {
        let obj = {
            id: id,
            type: 2
        }
        reqCartedit(obj).then(res => {
            this.listAdd()
        })
        this.setState({
            isAll:false
        })
    }
    //商品减少
    delGoods(id, num) {
        const { isClick } = this.state
        if (isClick) {   //如果为true 开始执行
            this.setState({ isClick: false })   //将isClick 变成false，将不会执行处理事件
            let obj = {
                id: id,
                type: 1
            }
            if (num <= 1) {
                successAlert("不能再少啦!")
                return;
            } else {
                reqCartedit(obj).then(res => {
                    this.listAdd()
                })
            }
            const that = this   // 为定时器中的setState绑定this
            setTimeout(function () {       // 设置延迟事件，1秒后将执行
                that.setState({ isClick: true })   // 将isClick设置为true
            }, 1000);
        }
    }
    //修改商品选择中状态
    changeCheck(index) {
        let { carlist } = this.state
        carlist[index].isCheck = !carlist[index].isCheck
        let all = carlist.every(item => item.isCheck)
        this.setState({
            carlist: carlist,
            isAll: all
        })
    }
    //全选按钮is
    changeAll() {
        let { carlist, isAll } = this.state
        this.setState({
            carlist: carlist.map(item => {
                item.isCheck = !isAll;
                return item
            }),
            isAll: !this.state.isAll
        })
        
    }
    //点击了编辑
    editClick() {
        this.setState({
            isEditor: !this.state.isEditor
        })
    }
    //点击了删除
    del(id) {
        reqCartdelete({ id: id }).then(res => {
            successAlert("删除成功")
            this.listAdd()
        })
    }
    render() {
        const { carlist, isAll, isEditor } = this.state
        //合计
        var allNum=0;
        carlist.forEach(item => {
            if (item.isCheck === true) {
               allNum += item.price * item.num
            }
        })
        return (
            <div className="car">
                <Header title="购物车" back></Header>
                <ul>
                    {
                        carlist.map((item, index) => {
                            return (
                                <li key={item.id}>
                                    <div className="inner">
                                        <p className="tit">
                                            <img src={house} alt="" />杭州保税区仓库</p>
                                        {/* 删除的类名是box-del,非删除是box */}
                                        <div className={isEditor ? "box box-del" : "box"}>
                                            <img src={item.isCheck ? sel : nosel} alt="" className="pic" onClick={() => this.changeCheck(index)} />
                                            <img src={item.img} alt="" className="one" />
                                            <div className="des">
                                                <p>{item.goodsname}</p>
                                                <p>
                                                    <span onClick={() => this.delGoods(item.id, item.num)}>-</span>
                                                    <span>{item.num}</span>
                                                    <span onClick={() => this.addGoods(item.id)}>+</span>
                                                </p>
                                                <p>总价：￥{item.price * item.num}</p>
                                            </div>
                                            <span className="del" onClick={() => this.del(item.id)}>删除</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>
                <div className="footer">
                    <div className="all">
                        <img src={isAll ? sel : nosel} alt="" onClick={() => this.changeAll()} />
                        <div>全选</div>
                    </div>
                    <div className="all" >
                        <img src={isEditor ? edit : noedit} alt="" onClick={() => this.editClick()} />
                        <div>编辑</div>
                    </div>
                    <div className="all" >合计：￥{allNum}</div>
                    <div className="sum">去结算</div>
                </div>
            </div>
        )
    }
}
