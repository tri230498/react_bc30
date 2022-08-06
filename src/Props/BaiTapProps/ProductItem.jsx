import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="card">
        <img src={product.image} alt="" style={{objectFit: 'cover'}}/>
        <div className="card-body">
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button className="btn bg-dark text-white">Add to carts</button>
        </div>
      </div>
    );
  }
}
