import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../Pages/Home/Index";
import { QuemSomos } from "../Pages/QuemSomos/Index";
import { NotFound } from "../Pages/NotFound";

export const Root = () =>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={`/quemsomos/:nome/:idade`} element={<QuemSomos/>}/>
                <Route path ={ "*" }element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}