import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Cart, Home, Login, Products, Register } from "../containers";
import PrivateRoute from './private-route'

function RoutesComponent() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/cadastro" element={<Register/>} />
                <Route path="/produtos" element={<Products/>} />
                <Route path="/" element={<Home/>} />
                
                <Route path="/carrinho"
                    element={<PrivateRoute element={Cart} />}
                />
            </Routes>
        </Router>
    );
}

export default RoutesComponent;
