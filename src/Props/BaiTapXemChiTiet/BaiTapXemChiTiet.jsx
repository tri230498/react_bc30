import React, { Component } from "react";
import CacSanPham from "./CacSanPham";
const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];
export default class BaiTapXemChiTiet extends Component {
  state = {
    sanPhamChiTiet: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };
  renderProduct = () => {
    return data.map((dienthoai, index) => {
      let { hinhAnh, tenSP, giaBan } = dienthoai;
      return (
        <div className="col-4" key={index}>
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
                  this.xemChiTiet(dienthoai);
                }}
              >
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  xemChiTiet = (sanPhamClick) => {
    console.log(sanPhamClick);
    // set lại giá trị state.sanPhamChiTiet = sản phẩm người dùng click vào 
    this.setState ({
      sanPhamChiTiet : sanPhamClick
    })
  };

  render() {
    let {
      maSP,
      tenSP,
      manHinh,
      heDieuHanh,
      cameraTruoc,
      cameraSau,
      ram,
      rom,
      giaBan,
      hinhAnh,
    } = this.state.sanPhamChiTiet;
    return (
      <div className="container">
        <h3 className="text-center">Danh sách sản phẩm</h3>
        <div className="row">
          {/*======== Cách 1: Dùng map viết html =========*/}
          {/* {data.map((sanPham, index) => {
            return <div className="col-4" key={index}>
                <CacSanPham dsSanPham={sanPham} xemChiTiet = {this.xemChiTiet}/>
            </div>;
          })} */}
          {/*======== Cách 2: Dùng hàm viết map cho html =========*/}
          {this.renderProduct()};
        </div>
        <div className="mt-2">
          <div className="row">
            <div className="col-4">
              <h3 className="text-center">Tên sản phẩm</h3>
              <img src={hinhAnh} alt="..." width={"100%"} />
            </div>
            <div className="col-8">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <thead>
                  <tr>
                    <td>Màn hình</td>
                    <td>{manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{rom}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
