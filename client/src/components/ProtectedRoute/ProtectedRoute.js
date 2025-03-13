import React from "react";
import { Route, Redirect } from "react-router-dom";

// Componente para proteger rotas privadas
const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                const token = sessionStorage.getItem("token"); // Obtém o token
                return token ? <Component {...props} /> : <Redirect to="/signin" />;
            }}
        />
    );
};

export default ProtectedRoute;
