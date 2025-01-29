import React from "react";
import PropTypes from "prop-types";

import { UserProvider } from "./UseContext";
import { CartProvider } from "./CartContext";

const AppProvider = ({ children }) => (
    <UserProvider>
        <CartProvider>{children}</CartProvider>
    </UserProvider>
)

AppProvider.propTypes = {
    children: PropTypes.node
}


export default AppProvider