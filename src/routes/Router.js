import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react'
import HomePage from "../pages/HomePage/HomePage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import CreateRecipePage from "../pages/CreateRecipePage/CreateRecipePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/recipe/:recipeId" element={<DetailsPage/>}/>
        <Route path="/recipe/new" element={<CreateRecipePage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
        
       
    </Routes>
    </BrowserRouter>
  )
}

export default Router