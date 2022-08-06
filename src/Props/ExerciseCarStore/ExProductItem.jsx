import React, { Component } from 'react'

export default class ExProductItem extends Component {
  render() {
    let {product} = this.props;
    let {name,price,img} = product;
    return (
      <div className="card">
        <img src={img} alt="..." />
        <div className="card-body">
            <p>{name}</p>
            <p>{price}</p>
            <button className='btn btn-success' data-bs-toggle="modal"
          data-bs-target="#modelId">Deltail</button>
        </div>
      </div>
    )
  }
}
