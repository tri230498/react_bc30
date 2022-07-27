import React, { Component } from "react";

export default class Databinding extends Component {
  userName = "Thạc Vi";
  showInFo() {
    return "Nguyễn Huỳnh Phước Trí";
  }
  renderCard = () => {
    return (
      <div>
        userName: {this.userName}
        <img className="ms-2"
          src="https://picsum.photos/200/
    "
          alt="..."
        />
        ;
      </div>
    );
  };
  render() {
    const name = "Phương Trinh";
    const tinhDiemTrungBinh = function (diemToan, diemVan, diemAnhVan) {
      return (diemToan + diemVan + diemAnhVan) / 3;
    };
    const course = {
      name: "Trí",
      age: 24,
      address: "57/1 Trần Hưng Đạo",
    };
    // console.log(course);
    return (
      // Hàm với biến const var let khi khai báo có {}
      <div>
        <p>Họ tên: {name}</p>
        <p>Total: {tinhDiemTrungBinh(7, 5, 8)}</p>
        <p>{this.showInFo()}</p>
        <p>Tuổi: {course.age}tuổi</p>
        <p>{this.renderCard()}</p>
      </div>
    );
  }
}
