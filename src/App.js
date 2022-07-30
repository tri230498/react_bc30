import Databinding from "./Databinding/Databinding";
import HandleEvent from "./HandleEvent/HandleEvent";
import Home from "./Home/Home";
import BaiViet from "./Props/BaiViet";
import DemoProps from "./Props/DemoProps/DemoProps";
import BaiTapRenderMap from "./RenderWithMap/BaiTapRenderMap";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaitapState from "./State/BaitapState";
import DemoState from "./State/DemoState";
import StyleRender from "./StyleRender/StyleRender";







function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <Databinding/> */}
      {/* <HandleEvent/> */}
      {/* <DemoState/> */}
      {/* <p className='color-red'>StyleRender</p> */}
      {/* <BaitapState /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapRenderMap/> */}
      <DemoProps />
    </div>

  );
}

export default App;
