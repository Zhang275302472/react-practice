import { handleActions } from 'redux-actions'

const initialState = {
    loading: false,
    data: []
}

const loginResponse = handleActions({
    'BeforeFetch'(state, action) {
        // debugger
        return { ...state, loading: true }
    },
    'Success'(state, action) {
        // debugger
        const { req, res } = action.payload
        return { data: res, loading: false }
    },
    'Fail'(state, action) {
        // debugger
        const { req, res } = action.payload
        return { data: res, loading: false }
    },
    'FetchData'(state, action) {
        // debugger
        return { ...state, loading: true }
    },
},initialState)

export default loginResponse
