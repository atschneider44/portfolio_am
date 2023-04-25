import React, { Component } from "react";
import "./scrollButton.css"

export default class ScrollButton extends Component {
  render() {
    return (
      <div className="mouse_scroll">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div>
          <div className="m_scroll_arrows unu"></div>
          <div className="m_scroll_arrows doi"></div>
          <div className="m_scroll_arrows trei"></div>
        </div>
      </div>
    );
  }
}
