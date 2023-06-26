import React from 'react';
import { Route, Routes } from 'react-router-dom';
//Pages
import TikiMain from 'components/main/TikiMain';
import OrangePixel from 'components/company/orangepixel';
import TheBrains from 'components/company/thebrains';
import TikiProduct from 'components/product/TikiProduct';
import TikiCost from 'components/cost/TikiCost';
import QnAPage from 'components/qaPage/QnApage';
import TikiHeader from 'components/TikiHeader';
import TikiFooter from 'components/TikiFooter';
//CSS
import './css/base.css';
import './css/layout.css';
import './css/bootstrap.min.css';
//responsive
import { Pc, Mobile, Tablet } from 'components/view';
import MobileHead from 'components/MobileHeader';

function App() {

  return (
    <div>
      <Pc>
        <TikiHeader></TikiHeader>
        <Routes>
          <Route exact path="/" element={<TikiMain />} />
          <Route path="/company" element={<OrangePixel />} />
          <Route path="/company/orangepixel" element={<OrangePixel />} />
          <Route path="/company/thebrains" element={<TheBrains />} />
          <Route path="/product" element={<TikiProduct />} />
          <Route path="/cost" element={<TikiCost />} />
          <Route path="/qna" element={<QnAPage />} />
        </Routes>
      </Pc>
      <Mobile>
        <MobileHead></MobileHead>
        <Routes>
          <Route exact path="/" element={<TikiMain />} />
          <Route path="/company" element={<OrangePixel />} />
          <Route path="/company/orangepixel" element={<OrangePixel />} />
          <Route path="/company/thebrains" element={<TheBrains />} />
          <Route path="/product" element={<TikiProduct />} />
          <Route path="/cost" element={<TikiCost />} />
          <Route path="/qna" element={<QnAPage />} />
        </Routes>
      </Mobile>
      <Tablet>
      <MobileHead></MobileHead>
        <Routes>
          <Route exact path="/" element={<TikiMain />} />
          <Route path="/company" element={<OrangePixel />} />
          <Route path="/company/orangepixel" element={<OrangePixel />} />
          <Route path="/company/thebrains" element={<TheBrains />} />
          <Route path="/product" element={<TikiProduct />} />
          <Route path="/cost" element={<TikiCost />} />
          <Route path="/qna" element={<QnAPage />} />
        </Routes>
      </Tablet>
      <TikiFooter></TikiFooter>
    </div>
  )
}

export default App;
