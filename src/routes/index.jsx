import React from 'react';
import {Navigate, Routes, Route} from 'react-router-dom';

import URL from '../constants/url';

//Common
import TikiHeader from '../components/TikiHeader';
import TikiFooter from '../components/TikiFooter';

//Main
import TikiMain from '../pages/main/TikiMain';

//Company
import TikiCompany from '../pages/company/TikiCompany';
//Product
import TikiProduct from '../pages/product/TikiProduct';
//Cost
import TikiCost from '../pages/cost/TikiCost';
//QA


function RootRoutes(){
    return (
        <>
            <TikiHeader/>
            <Routes>
                {/* MAIN */}
                <Route path={URL.MAIN} element={<TikiMain />} />

                {/* Company */}
                <Route path={URL.COMPANY} element={<Navigate to={URL.COMPANY}/>}/>
                <Route path={URL.COMPANY} element={<TikiCompany />} />
                {/* Product */}
                <Route path={URL.PRODUCT} element={<Navigate to={URL.PRODUCT}/>}/>
                <Route path={URL.PRODUCT} element={<TikiProduct />} />
                {/* Cost and Bill */}
                <Route path={URL.COST} element={<Navigate to={URL.COST}/>}/>
                <Route path={URL.COST} element={<TikiCost />} />

                {/* Q&A
                <Route path={URL.QA} element={<TikiQAPage/>}/> */}

            </Routes>
            <TikiFooter />
        </>
    )

}


export default RootRoutes;