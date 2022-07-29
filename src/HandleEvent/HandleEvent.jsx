import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = () => {
    alert("Hello CyberSoft");
  };

  showMessage = (name) => {
    alert("Hello" + name);
  };
  render() {
    return (
      <div className="container text-center">
        <h3>HandleEvent</h3>
        <button
          className="me-2 btn btn-danger"
          onClick={(e) => {
            // alert("Hello")
            this.showMessage(" Tri");
          }}
        >
          Click
        </button>

        <button className="btn btn-secondary" onClick={this.handleClick}>
          Click
        </button>
        <h3>Handle event change</h3>
        <input
          id="input" className="form-control w-25"
          onChange={(e) => {
            var tagInput = e.target.value;
            console.log(tagInput);
          }}
        />
      </div>
    );
  }
}
