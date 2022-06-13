import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../Pages/Home/Index";
import { QuemSomos } from "../Pages/QuemSomos/Index";

export const Root = () =>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/quemsomos" element={<QuemSomos/>}/>
            </Routes>
        </BrowserRouter>
    )
}