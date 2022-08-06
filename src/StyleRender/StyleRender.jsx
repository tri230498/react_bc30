import React, { Component } from "react";
// Cách 1: Dùng khi css cho page
import "./Style.css"; // Cách này sẽ ảnh hưởng đến toàn bộ ứng dụng
// Cách 2 : Dùng khi class có thể bị thay đổi bởi event từ người dùng
import style from "./StyleRender.module.css";
export default class StyleRender extends Component {
// Cách 3: Style trực tiếp khi style bị thay đổi bởi event từ người dùng
  render() {
    return (
      <div className="container">
        StyleRender
        <p className="color-red">StyleRender</p>
        <p className={`${style["color-blue"]} display-4`}>Text Blue</p>
        <p
          style={{
            color: "green",
            padding: "15px",
            backgroundColor: "black",
            display: "inline-block",
          }}
        >
          Nguyễn Huỳnh Phước Trí
        </p>
      </div>
    );
  }
}
