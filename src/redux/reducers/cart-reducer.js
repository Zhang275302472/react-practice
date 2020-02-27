import {  UPDATE_CART} from '../actions/cart-actions'


const initialState = {
    cardName: '1'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_CART: {
            return {
                ...state,
                cardName: action.payload.cardName
            }
        }
        default:
            return state;
    }
}
