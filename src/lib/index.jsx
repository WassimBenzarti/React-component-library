import React, { Component } from "react";

class MySuperCoolComponent extends Component {
  handleClick = () => {
    console.log("Click!");
  };

  render() {
    const { color, children } = this.props;
    return (
      <h1 style={{ color }}>
        {children}
      </h1>
    );
  }
}

export default MySuperCoolComponent;
