import { createAction } from 'redux-actions'  // 简化了action和reducer的复杂度
import axios from 'axios'

// login 登陆
export const BeforeFetch = createAction('BeforeFetch')
export const Success = createAction('Success')
export const Fail = createAction('Fail')

export function FetchData(params) {
    return createAction('FetchData', (dispatch) => {
        // console.log('FetchDataParams', params)
        dispatch(BeforeFetch())
        return axios.get('http://localhost:9090/getYqzs/getCityrank_moveout?moveoutId=110000')
            .then(res => {
                console.log('data', res)
                // debugger
                dispatch(Success(res))
            })
            .catch(err => {
                dispatch(Fail(err))
                console.log('err', err)
            })
    })
}

