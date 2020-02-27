import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import reduce from './reducers';

const middleware = applyMiddleware(thunk, logger);
// applyMiddlewares是redux的原生方法，作用是将所有中间件组成一个数组，依次执行。
// 　　要注意的是中间件为顺序有要求
let store = createStore(reduce, composeWithDevTools(middleware));
export default store;


// 维持应用的 state；
// 提供 getState() 方法获取 state；

// 提供 dispatch(action) 方法更新 state；
// { type: 'CHANGE_USERNAME', payload: "Welcome to Redux" };

// 通过 subscribe(listener) 注册监听器;
// 通过 subscribe(listener) 返回的函数注销监听器。
