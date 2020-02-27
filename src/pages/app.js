import React  from 'react'

class AppPage extends React.Component {
    constructor(props, context) {
        super(props)
    }

    // 组件已经加载到dom中
    componentDidMount() {
        this.init()
    }

    init() {

    }

    render() {
        return (
            <div>
                app页面
            </div>
        );
    }
}
export default AppPage
