import React from 'react';

class Bundle extends React.Component {
  state = {
    mod: null,
  };

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mod: null,
    });
    
    props.load().then((mod) => {
    this.setState({
        mod: mod.default ? mod.default : mod,
      });
    });
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}
const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {(Component) =>
      Component ? <Component {...props} /> : <div>Loading...</div>
    }
  </Bundle>
);

export default createComponent;