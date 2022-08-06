import React, { Component } from "react";

export default class CacSanPham extends Component {
  render() {
    let { dsSanPham, xemChiTiet } = this.props;
    let { hinhAnh, tenSP, giaBan } = dsSanPham;
    return (
      <div className="card">
        <img
          src={hinhAnh}
          alt="..."
          height={400}
          style={{ objectFit: "cover" }}
        />
        <div className="card-body">
          <h3>{tenSP}</h3>
          <p>{giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              xemChiTiet(dsSanPham);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
