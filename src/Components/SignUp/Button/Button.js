import { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    return (
      <button
        type={this.props.type}
        className={`button ${this.props.disabled && "disabled"}`}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;
