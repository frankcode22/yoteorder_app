
import { BrowserRouter as Router, Route, Switch,Routes } from "react-router-dom";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import OrderedProduct from "./components/home/OrderedProduct";
import OrderView from "./components/dashboards/orders/OrderView";
import CustDashboard from "./components/dashboards/customer/CustDashboard";
import ProtectedRoute from "./helpers/ProtectedRoute";
import PrivateRoutes from "./helpers/PrivateRoutes";
import OrderReview from "./components/dashboards/orders/OrderReview";
import SignUp from "./components/home/SignUp";
import NewRequests from "./components/dashboards/seller/NewRequests";
import Chat from "./components/dashboards/chat/Chat";
import OrderChats from "./components/dashboards/seller/OrderChats";
//import ChatClient from "./components/dashboards/orders/ChatClient";
import OrderChatsCustomer from "./components/dashboards/orders/OrderChatsCustomer";
import AddFunds from "./components/dashboards/customer/AddFunds";
import HelpAndSupport from "./components/support/HelpAndSupport";
import MyOrders from "./components/dashboards/customer/MyOrders";
import EditOrder from "./components/dashboards/customer/EditOrder";

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
    <div>
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>

        <Routes>
   
        <Route path="/" element={ <Home/>} />


        <Route element={<PrivateRoutes/>}>

    
        <Route element={<OrderView/>} path="/order/:id"/>

        <Route element={<OrderReview/>} path="/order/pay/:id/:sellerId"/>


        <Route element={<AddFunds/>} path="/pay/order/:id/:sellerId"/>


        <Route path="/new_requests" element={ <NewRequests/>} />

        <Route element={<OrderChats/>} path="/chat/:id"/>

       {/*<Route element={<Chat/>} path="/chat/:orderId"/>*/} 


        <Route element={<OrderChatsCustomer/>} path="/chat_seller/:orderId"/>


        <Route element={<MyOrders/>} path="/customer/orders"/>


        <Route element={<EditOrder/>} path="/edit_order/:id"/>





        </Route>

        <Route  path="/product_ordered/:item" element={ <OrderedProduct/>} />

        <Route path="/customer-dashboard" element={ <CustDashboard/>} />

        <Route path="/help_and_support" element={ <HelpAndSupport/>} />


        <Route path="/become_seller" element={ <SignUp/>} />

      


        </Routes>
          
        </Router>
      </AuthContext.Provider>

      {/*The footer causes a scroll bar at the bottom*/}

      <Footer/>
    </div>
  );
}

export default App;
