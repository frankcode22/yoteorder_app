
import { BrowserRouter as Router, Route, Routes,Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import Homepage from "./Components/Front/home/Homepage";
import SignIn from "./Components/Front/home/SignIn";
import AdminDashboard from "./Components/Dashboards/admin/AdminDashboard";
import OrderedProduct from "./Components/Front/home/OrderedProduct";
import Dashboard from "./Components/Dashboards/seller/Dashboard";
import ProductSetting from "./Components/Dashboards/seller/ProductSetting";

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
  };

  return (
    <div className="App">
    <AuthContext.Provider value={{ authState, setAuthState }}>
       
    <Router>
  
    <Routes>
     
        <Route path="/dashboard" element={ <AdminDashboard/>}/>


        <Route path="/dashboard-vendor" element={ <Dashboard/>}/>


        <Route path="/setting-products" element={ <ProductSetting/>}/>
    </Routes>

    <div>
      
      
    <Routes>
   
        <Route path="/" element={ <Homepage/>} />

        <Route path="/signin" element={ <SignIn/>} />


        <Route path="/ordered-product" element={ <OrderedProduct/>} />


        </Routes>
       
        </div>
       
       
    
      </Router>

    </AuthContext.Provider>
   
    </div>
  );
}

export default App;
