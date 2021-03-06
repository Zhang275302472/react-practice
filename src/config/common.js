//
// import { hashHistory } from 'react-router'
// import { message } from 'antd'
// import { loginByTicket, staff, login as loginApi, getBtns } from '@apis/common'

// 异步请求需要走redux的方式
export const createAjaxAction = (createdApi, startAction, endAction) => (request = {}, resolve, reject, config) => (dispatch) => {
    if (startAction) dispatch(startAction({ req: request, res: {} }))
    const _resolve = (response) => {
        if (endAction) dispatch(endAction({ req: request, res: response }))
        if (resolve) resolve(response)
    }
    return createdApi(request, _resolve, reject, config)
}
