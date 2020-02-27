import { combineReducers } from 'redux';
import productsReducer from './products-reducer'
import cartReducer from './cart-reducer'
import LoginReducer from './login-reducer'

// combineReducers()
// 所做的只是生成一个函数，这个函数来调用你的一系列 reducer，每个 reducer 筛选出 state 中的一部分数据并处理，然后这个生成的函数再将所有 reducer 的结果合并成一个大的对象
// Reducer相当于事件模型中的监听器，它接收一个旧的状态和一个action，从而处理state的更新逻辑，返回一个新的状态，存储到Store中。
// 永远不要在 reducer 里做以下操作：

// 修改传入参数；
// 执行有副作用的操作，如 API 请求和路由跳转；
// 调用非纯函数，如 Date.now() 或 Math.random()。

// reducer 是纯函数。它仅仅用于计算下一个 state。
// 它应该是完全可预测的：多次传入相同的输入必须产生相同的输出。它不应做有副作用的操作，如 API 调用或路由跳转。这些应该在 dispatch action 前发生


const allReducers = {
  products: productsReducer,
  cart: cartReducer,
  login: LoginReducer
}

const rootReducer = combineReducers(allReducers);
export default rootReducer;
