import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../containers/login";
import Register from "../containers/Register";

function RoutesComponent() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
            </Routes>
        </Router>
    );
}

export default RoutesComponent;
