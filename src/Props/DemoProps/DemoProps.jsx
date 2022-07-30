import React, { Component } from "react";
import BaiViet from "../BaiViet";
import Card from "./Card";

const dsBaiViet = [
  {tieuDe:'tiêu đề 1',noiDung:'nội dung 1'},
  {tieuDe:'tiêu đề 2',noiDung:'nội dung 2'},
  {tieuDe:'tiêu đề 3',noiDung:'nội dung 3'},
]
export default class DemoProps extends Component {


  render() {
    const tenSP = "Product 1";
    const gia = "1000";
    const baiViet = {
      tieuDe: "Học lập trình tại Cybersoft",
      noiDung:
        "Bacon ipsum dolor amet drumstick chislic landjaeger tongue swine capicola. Porchetta meatball shoulder andouille. Chuck ball tip beef spare ribs flank burgdoggen. Meatball short loin venison, chislic drumstick biltong sirloin chicken spare ribs brisket pork loin sausage. Chislic ground round sirloin pancetta pork chop cupim tri-tip turkey chicken hamburger tongue tail pig. Andouille beef strip steak short loin, capicola ham tri-tip sirloin leberkas.",
    };

    return (
      <div className="container" style={{ marginBottom: 500 }}>
        <div className="w-25">
          <Card tenSP={"Product 2"} gia={"1200"} />
        </div>
        <div className="w-25 mt-2">
          <Card tenSP={"Product 2"} gia={"1200"} />
        </div>
        <hr />
        <h3 className="text-center">Demo bài viết</h3>
        {dsBaiViet.map((baiViet, index) => {
          return <div key={index}>
            <BaiViet obBaiViet={baiViet} />
          </div>
        })}
      </div>
    );
  }
}
