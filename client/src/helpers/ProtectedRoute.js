import React from 'react'
import { Navigate,Routes, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    console.log("this", isAuthenticated);
  
    return (
      
      <Route
        {...restOfProps}
        render={(props) =>
          isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
        }
      />
    );
  }

export default ProtectedRoute