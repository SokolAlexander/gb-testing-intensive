import React from 'react';

import "./styles.css";

export default class Header extends React.Component {
  componentDidMount() {
    console.log("child did mount");
  }

  componentDidUpdate() {
    console.log("child did update");
  }

  componentWillUnmount() {
    console.log('unmount');
  }

  render() {
    return <span className="counter">{this.props.counter}</span>;
  }
}
