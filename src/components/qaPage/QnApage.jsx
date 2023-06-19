import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';

import TikiFooter from "components/TikiFooter";
import TikiHeader from "components/TikiHeader";
import QnaDetail from "./QnaDetail";
import QnAForm from "./QnAForm";
import QnAList from "./QnAList";


const QnAPage = () => {

    return (
        <div>
            <TikiHeader />
            <h1>QnA</h1>
            <Routes>
                <Route exact path="/" element={<QnAList/>} />
                <Route path="/question/:id" element={<QnaDetail/>} />
                <Route path="/ask" component={<QnAForm/>} />
            </Routes>
            <TikiFooter />
        </div>
    );
}

export default QnAPage;