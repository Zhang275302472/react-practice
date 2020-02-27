import React from "react";
import { connect } from 'react-redux';
import { FetchData } from '@/redux/actions/login-actions.js'

class LoginPages extends React.Component {
    constructor(props, context) {
        super(props)
    }
    componentDidMount() {
        this.props.login({userName: 'zhanghaoran'})
    }

    render() {
        return (
            <div>
                登陆页
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login(data) {
            dispatch(FetchData(data))
        }
    }
}

const LoginPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginPages)
export default LoginPage
