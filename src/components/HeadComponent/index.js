import React from "react";
import bannerBg from "./banner.jpg"
import "./index.less"
import {connect} from 'react-redux'
import {updateCart} from '../../redux/actions/cart-actions.js'




class HeadComponents extends React.Component {
    // 初始化页面常量 绑定事件方法
    constructor(props, context) {
        super(props)
        this.state = {
            cardName: '1',
            headList: [
                {id: 0, name: "全国疫情"},
                {id: 1, name: "地区疫情"}
            ]
        };
    }
// 因为 this.props 和 this.state 可能会异步更新，所以你不要依赖他们的值来更新下一个状态。
// 可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数

    componentWillMount() {
        let {updateCart} = this.props
        updateCart('11121')
    }

    setNavItem(data) {
        return data.map((e, key) => {
            return <div key={key}>{e.name}</div>;
        });
    }

    render() {
        return (
            <div className="head">
                <div className="bar">
                    <img src={bannerBg} alt="banner图片" width="100%" height="260px"></img>
                </div>
                <div>
                    aaa
                    {this.props.cardName}
                </div>
                <div className="nav">{this.setNavItem(this.state.headList)}</div>
            </div>
        );
    }
}


// 使用 connect() 创建容器组件前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中
const mapStateToProps = (state) => {
    return {cardName: state.cart.cardName}  // 返回期望注入到展示组件的props中的参数
};

// 定义 mapDispatchToProps() 方法接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法
const mapDispatchToProps = (dispatch) => ({
    updateCart(data) {
        // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
        // 执行updateCart会返回一个函数
        // 这正是redux-thunk的所用之处:异步action
        dispatch(updateCart(data))
        // 上行代码相当于
        /*dispatch((dispatch, getState) => {
            dispatch({ type: 'SET_PAGE_TITLE', data: data })
        )*/
    }
})

const HeadComponent = connect(  // 产生一个新的组件
    mapStateToProps,
    mapDispatchToProps,
)(HeadComponents)

export default HeadComponent;
