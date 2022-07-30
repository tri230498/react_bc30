import React, { Component } from "react";

const data = [
  {
    id: "1",
    name: "product 1",
    price: "1000",
    img: "https://picsum.photos/200/200",
  },
  {
    id: "2",
    name: "product 2",
    price: "2000",
    img: "https://picsum.photos/200/200",
  },
  {
    id: "3",
    name: "product 3",
    price: "3000",
    img: "https://picsum.photos/200/200",
  },
];

export default class RenderWithMap extends Component {
  // Viết dưới dạng thẻ nhưng khi REACJS biên dịch lại viết dưới dạng object
  renderProduct = () => {
    let jsxArr1 = []; // [<tr></tr>,<tr></tr>]
    //=================================== Cách 1 ====================================//
    for (let object of data) {
      let tr1 = (
        <tr className="text-center" key={object}>
          <td>{object.id}</td>
          <td>{object.name}</td>
          <td>{object.price}</td>
          <td>
            <img src="{object.img}" alt="..." width={50} />
          </td>
        </tr>
      );
      jsxArr1.push(tr1);
    }
    //   return jsxArr
    //=================================== Cách 2 ====================================//
    let jsxArr2 = [];
    for (let index = 0; index < data.length; index++) {
      // Mối lần duyệt lấy ra 1 object prod trong mảng data
      let prod = data[index];
      // Từ dữ liệu object tạo ra object (jsx)
      let tr2 = (
        <tr className="text-center" key={index}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td>{prod.price}</td>
          <td>
            <img src={prod.img} alt="..." width={100} />
          </td>
        </tr>
      );
      // add các jsx vào arrJSX
      jsxArr2.push(tr2);
    }
    // return jsxArr;
    //=================================== Cách 3 ====================================//
    // Dùng map
    // const data = [
    //   {
    //     id: "1",
    //     name: "product 1",
    //     price: "1000",
    //     img: "https://picsum.photos/200/200",
    //   },
    //   {
    //     id: "2",
    //     name: "product 2",
    //     price: "2000",
    //     img: "https://picsum.photos/200/200",
    //   },
    //   {
    //     id: "3",
    //     name: "product 3",
    //     price: "3000",
    //     img: "https://picsum.photos/200/200",
    //   },
    // ];
    return data.map((prod, index) => {
      // Muốn biến đổi prod (object) thành cái gì thì viết vào chính giữa return cái đó
      // Biến đổi object (jsx) or object string `<tr></tr>`
      // Biến đổi object (jsx) => <tr></tr>
      return (
        <tr className="text-center" key={index}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td>{prod.price}</td>
          <td>
            <img src={prod.img} alt="..." width={100} />
          </td>
        </tr>
      );
    });
    // return jsxArr3; // [<tr></tr>, <tr></tr>, <tr></tr>]
  };

  renderCardProduct = () => {
    return data.map((prod, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card">
            <img src={prod.img} alt="" />
            <div className="card-body">
              <p>{prod.name}</p>
              <p>{prod.price}</p>
              <button className="btn btn-success">Add to cart</button>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Table product</h3>
        <table className="table">
          <thead className="text-center">
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
        <hr />
        <h3 className="text-center">Product list</h3>
        <div className="row">{this.renderCardProduct()}</div>
      </div>
    );
  }
}
