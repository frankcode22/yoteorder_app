
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
import SignUp from "./Components/Front/home/SignUp";
import BookingPage from "./Components/Front/booking/BookingPage";
import AccountSetting from "./Components/Dashboards/seller/AccountSetting";
import CustomerDashboard from "./Components/Dashboards/customer/CustomerDashboard";
import ProfileC from "./Components/Dashboards/customer/ProfileC";
import ProfileS from "./Components/Dashboards/seller/ProfileS";
import Users from "./Components/Dashboards/admin/Users";
import Products from "./Components/Dashboards/admin/Products";
import Vendors from "./Components/Dashboards/admin/Vendors";
import EditBusinessSetting from "./Components/Dashboards/admin/EditBusinessSetting";

function App() {
  const [authState, setAuthState] = useState({
    username:"",
    first_name:"",
    phone_no:"",
    role:"",
    id:0,
    status:false,
  });

  useEffect(() => {
    axios
    .get("https://yoteorder-server.herokuapp.com/users/auth", {
     // .get("http://localhost:3001/users/auth",{
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username:response.data.username,
            role:response.data.role,
            first_name:response.data.first_name,
            phone_no:response.data.phone_no,
            id:response.data.id,
            status:true,
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

        <Route path="/dashboard-customer" element={ <CustomerDashboard/>}/>

        <Route path="/profile-customer" element={ <ProfileC/>}/>

        <Route path="/profile-vendor" element={ <ProfileS/>}/>



        <Route path="/setting-products" element={ <ProductSetting/>}/>

        <Route path="/account-setting" element={ <AccountSetting/>}/>


        <Route path="/users" element={ <Users/>}/>

        <Route path="/products" element={ <Products/>}/>

        <Route path="/vendors" element={ <Vendors/>}/>

        <Route path="/edit-business-setting/:id" element={ <EditBusinessSetting/>}/>


       
    </Routes>

    <div>
      
      
    <Routes>
   
        <Route path="/" element={ <Homepage/>} />

        <Route path="/signin" element={ <SignIn/>} />


        <Route path="/signup" element={ <SignUp/>} />



        <Route path="/ordered-product/:pname" element={ <OrderedProduct/>} />

        <Route path="/order-now" element={ <BookingPage/>}/>


        </Routes>
       
        </div>
       
       
    
      </Router>

    </AuthContext.Provider>
   
    </div>
  );
}

export default App;
