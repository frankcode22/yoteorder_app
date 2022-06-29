import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = () => {
   // let auth = {'token':false}
   // let isAuthenticated = localStorage.getItem({'isAuthenticated':false});
   const isAuthenticated = localStorage.getItem("isAuthenticated");
    console.log("this", isAuthenticated);
    return(
        isAuthenticated ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes