import React from 'react';
import { Route, Routes } from 'react-router-dom';
//Pages
import TikiMain from 'components/main/TikiMain';
import OrangePixel from 'components/company/orangepixel';
import TheBrains from 'components/company/thebrains';
import TikiProduct from 'components/product/TikiProduct';
import TikiCost from 'components/cost/TikiCost';
import QnAPage from 'components/qaPage/QnApage';
//CSS
import './css/base.css';
import './css/components.css';
import './css/layout.css';
import './css/bootstrap.min.css';


function App() {

  return ( 
    <div>
      <Routes>
        <Route exact path="/" element={<TikiMain/>} />
        <Route path="/company" element={<OrangePixel/>}  />
        <Route path="/company/orangepixel" element={<OrangePixel/>}  />
        <Route path="/company/thebrains" element={<TheBrains/>}  />
        <Route path="/product" element={<TikiProduct/>}  />
        <Route path="/cost" element={<TikiCost/>}  />
        <Route path="/qna" element={<QnAPage/>} /> 
      </Routes>
      </div>  
  )
}

export default App;
