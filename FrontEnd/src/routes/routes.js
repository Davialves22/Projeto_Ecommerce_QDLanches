import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../containers/login";
import Register from "../containers/Register";
import Home from "../containers/Home";
import PrivateRoute from "./private-route";
import Products from "../containers/Products";

function RoutesComponent() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />

                <Route path="/"
                    element={<PrivateRoute element={Home} />}
                />
                <Route path="/produtos"
                    element={<PrivateRoute element={Products} />}
                />
            </Routes>
        </Router>
    );
}

export default RoutesComponent;
