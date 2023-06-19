import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TikiMain from 'components/main/TikiMain';
import TikiCompany from 'components/company/TikiCompany';
import TikiProduct from 'components/product/TikiProduct';
import TikiCost from 'components/cost/TikiCost';

//CSS
import './css/base.css'
import './css/components.css'
import './css/layout.css'
import './css/pages.css'

function App() {

  return ( 
      <Routes>
        <Route exact path="/" element={<TikiMain/>} />
        <Route path="/company" element={<TikiCompany/>}  />
        <Route path="/product" element={<TikiProduct/>}  />
        <Route path="/cost" element={<TikiCost/>}  />
        {/* <Route path="/contact" component={ContactPage} /> */}
      </Routes>
  )
}


export default App;
