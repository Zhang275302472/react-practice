import React from "react";
import { connect } from 'react-redux';
import { FetchData } from '@/redux/actions/login-actions.js'

class LoginPages extends React.Component {
    constructor(props, context) {
        super(props)
        // ES6写法，也就是类(Class)的写法，React默认不会自动绑定类中的方法造成的
        // this.abs = this.abs.bind(this)
        this.state = {
            name : 'qweqwe'
        }
    }
    componentDidMount() {
        this.props.login({userName: 'zhanghaoran'})
        // this.setState({name: 'aaass'})
    }

    setData = (e) =>{
        console.log('e', e)
        this.setState({name: 'aaa'})
    }

    render() {
        return (
            <div onClick={this.setData}>
                登陆页
                <p>{this.state.name}</p>
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



// ES6写法，也就是类(Class)的写法，React默认不会自动绑定类中的方法造成的
// this.abs = this.abs.bind(this)
// abs(a) {}

// 或者
// abs = (e) =>{
//     console.log('e', e)
//     this.setState({name: 'aaa'})
// }
