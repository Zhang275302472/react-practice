export const UPDATE_CART = 'UPDATE_CART';
// action 内必须使用一个字符串类型的 type 字段来表示将要执行的动作，payload要重载对应的reducer里面的字段

export function updateCart(cardName) {
    return {
        type: UPDATE_CART,
        payload: {
            cardName
        }
    }
}

// 如果引入了thunk中间件，即可以获得传入函数的能力
// export function asyncFuc() {
//     return dispatch => {
//         setTimeout( ()=>{
//             dispatch(updateCart('111'))
//         }, 2000)
//     }
//
// }
