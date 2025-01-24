import React from "react";
import { Navigate } from 'react-router-dom'; 
import PropTypes from "prop-types";

function PrivateRoute({ element: Element, ...rest }) {
    const user = localStorage.getItem('QDLanches:userData');

    if (!user) {
        return <Navigate to="/login" />;
    }
    
    return <Element {...rest} />;
}

export default PrivateRoute;

PrivateRoute.propTypes = {
    element: PropTypes.oneOfType([PropTypes.func, PropTypes.element]).isRequired
};
