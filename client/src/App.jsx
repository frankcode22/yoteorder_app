
import { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Route, Routes,Switch,Navigate, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect,useContext } from "react";
import axios from "axios";
//import Homepage from "./Components/Front/home/Homepage";
import SignIn from "./Components/Front/home/SignIn";
import AdminDashboard from "./Components/Dashboards/admin/AdminDashboard";
import OrderedProduct from "./Components/Front/home/OrderedProduct";
import Dashboard from "./Components/Dashboards/seller/Dashboard";
import ProductSetting from "./Components/Dashboards/seller/ProductSetting";
import SignUp from "./Components/Front/home/SignUp";
import BookingPage from "./Components/Front/booking/BookingPage";
//import AccountSetting from "./Components/Dashboards/seller/AccountSetting";
import CustomerDashboard from "./Components/Dashboards/customer/CustomerDashboard";
import ProfileC from "./Components/Dashboards/customer/ProfileC";
import ProfileS from "./Components/Dashboards/seller/ProfileS";
import Users from "./Components/Dashboards/admin/Users";
import Products from "./Components/Dashboards/admin/Products";
import Vendors from "./Components/Dashboards/admin/Vendors";
import EditBusinessSetting from "./Components/Dashboards/admin/EditBusinessSetting";
import { DataProvider } from "./helpers/DataContext";
import { OrderDetailsDataProvider } from "./helpers/OrderDetailsContext";
import { LocationDataDataProvider } from "./helpers/LocationDataContext";
import { LocationDataContextInitProvider } from "./helpers/LocationDataContextInit";
import EmailCompose from './Components/Dashboards/admin/EmailCompose';
import MailBox from './Components/Dashboards/seller/MailBox';
import Features from './Components/Front/home/Features';
import HomepageWithModal from './Components/Front/home/HomepageWithModal';
import HelpCentre from './Components/Front/home/HelpCentre';
import UserDetails from './Components/Dashboards/admin/UserDetails';
import Services from './Components/Front/home/Services';
import ProductDetails from './Components/Dashboards/admin/ProductDetails';
import VideoDemos from './Components/Dashboards/seller/VideoDemos';
import API from './services';
import ForgotPassword from './Components/Front/home/ForgotPassword';
import ServiceTypes from './Components/Dashboards/admin/ServiceTypes';
import SearviceSearchResults from './Components/Front/home/SearviceSearchResults';
import Bookings from './Components/Dashboards/seller/Bookings';
import Suppliers from './Components/Dashboards/admin/Suppliers';
import Sellers from './Components/Dashboards/admin/Retailors';
import Retailers from './Components/Dashboards/admin/Retailers';
import Retailors from './Components/Dashboards/admin/Retailors';
import MainDashboard from './Components/Dashboards/seller/MainDashboard';
import AdminHome from './Components/Dashboards/admin/AdminHome';
import SignUpNew from './Components/Front/home/SignUpNew';
import SignInNew from './Components/Front/home/SignInNew';
import PataMtaaniSuppliers from './Components/Dashboards/admin/PataMtaaniSuppliers';
import SupplierHome from './Components/Dashboards/supplier/SupplierHome';
import SellerHome from './Components/Dashboards/seller/SellerHome';
import ProductInventory from './Components/Dashboards/seller/ProductInventory';
import PataMtaaniRetailers from './Components/Dashboards/admin/PataMtaaniRetailers';
import RetailPOS from './Components/Dashboards/seller/RetailPOS';
import ProductCategories from './Components/Dashboards/seller/ProductCategories';

import CartProvider from "./helpers/CartContext"; 
import ProductsTabularView from './Components/Dashboards/seller/ProductsTabularView';
import AccountSettingNew from './Components/Dashboards/seller/AccountSettingNew';
import SuppliersAvailable from './Components/Dashboards/seller/SuppliersAvailable';
import HomePatamtaani from './Components/Front/home/HomePatamtaani';
import StoreInventory from './Components/Dashboards/supplier/StoreInventory';
import HelpCentrePataMtaani from './Components/Front/home/HelpCentrePataMtaani';
import RetailerSales from './Components/Dashboards/seller/RetailerSales';
import RetailerOrders from './Components/Dashboards/seller/RetailerOrders';
import AllOrders from './Components/Dashboards/supplier/AllOrders';
import AccountSetting from './Components/Dashboards/supplier/AccountSetting';
import EngagementRequests from './Components/Dashboards/supplier/EngagementRequests';
import Communication from './Components/Dashboards/admin/Communication';
import OrdersFromRetailers from './Components/Dashboards/supplier/OrdersFromRetailers';
import HomeUser from './Components/Dashboards/user/HomeUser';
import SubscriptionRequests from './Components/Dashboards/admin/SubscriptionRequests';
import ProtectedRoute from './utils/ProtectedRoute';
import ProductsProvider from './helpers/ProductsContext';
//import PrivateRoute from './helpers/PrivateRoute';
//import ProtectedRoute from './helpers/ProtectedRoute';
//import ProtectedRoute from './helpers/ProtectedRoute';


const Homepage = lazy(() => import('./Components/Front/home/Homepage'));


//const Products = lazy(() => import('./Products'));



function App() {

  const [user, setUser] = useState({});

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
      const userToken = localStorage.getItem('accessToken');
      if (!userToken || userToken === 'undefined') {
          setIsLoggedIn(false);
      }
      setIsLoggedIn(true);
  }

  const [authState, setAuthState] = useState({
    username:"",
    first_name:"",
    phone_no:"",
    role:"",
    id:0,
    status:false,
  });



  useEffect(() => {
    API
   //.get("https://yoteorder-server.herokuapp.com/users/auth", {
      .get("users/auth",{
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
          setIsLoggedIn(true);
        }
      });


      const theUser = localStorage.getItem("user");

      console.log("THE USER DATA IS",theUser)

     if (theUser && !theUser.includes("undefined")) {

      setAuthState(JSON.parse(theUser));
      setIsLoggedIn(true);
       setUser(JSON.parse(theUser));
     }


    
      checkUserToken();


    

  }, [isLoggedIn]);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ username: "", id: 0, status: false });
  };

  return (
    <div className="App">
    <AuthContext.Provider value={{ authState, setAuthState }}>
    

   

    <DataProvider>

    <OrderDetailsDataProvider>

    <LocationDataDataProvider>

    <LocationDataContextInitProvider>

    
    <ProductsProvider>
    <CartProvider>
       
    <Router>

    
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
     
        <Route path="/dashboard" element={ <AdminDashboard/>}/>

     
        <Route exact path="/home_admin" element={

          <ProtectedRoute>
          <AdminHome/>
          </ProtectedRoute>
        
        
         }/>

        <Route exact path="/home-user" element={ <HomeUser/>}/>

      
{/* 
        <Route
          path="/home-user"
          element={user?.email ? <HomeUser user={user} /> : <Navigate to="/" />}
        /> */}

       
        <Route exact path="/subscription-requests" element={ <SubscriptionRequests/>}/>

        <Route path="/dashboard-vendor" element={ <Dashboard/>}/>

        <Route path="/dashboard-customer" element={ <CustomerDashboard/>}/>

        <Route path="/profile-customer" element={ <ProfileC/>}/>

        <Route path="/profile-vendor" element={ <ProfileS/>}/>

       

        <Route path="/home_retailer" element={ 

          <ProtectedRoute>
 <SellerHome/>

          </ProtectedRoute>
        
        
        }/>







        <Route path="/product_inventory" element={ 
        
        <ProtectedRoute>
        
        <ProductInventory/>
        </ProtectedRoute>
        
        }/>


        <Route path="/product_cat" element={ <ProductCategories/>}/>

        <Route path="/products_tabular" element={ <ProductsTabularView/>}/>

        <Route path="/pos" element={
            <ProtectedRoute> <RetailPOS/></ProtectedRoute>
          
         
          
          }/>



<Route path="/common_items" element={
            <ProtectedRoute> <RetailPOS/></ProtectedRoute>
          
         
          
          }/>





        <Route path="/setting-products" element={ <ProductSetting/>}/>

        {/**<Route path="/account-setting" element={ <AccountSetting/>}/> */}


        <Route path="/my-account" element={ <AccountSettingNew/>}/>

        <Route path="/suppliers-around" element={ <SuppliersAvailable/>}/>



        <Route path="/retailers" element={ <PataMtaaniRetailers/>}/>


        <Route path="/communicate" element={ <Communication/>}/>



        <Route path="/rorders" element={ <RetailerOrders/>}/>


        <Route path="/new_orders" element={ <OrdersFromRetailers/>}/>

        

        <Route path="/sales" element={ <RetailerSales/>}/>


        <Route exact path="/users" element={ <Users/>}/>

        

        <Route path="/users/:id" element={ <UserDetails/>}/>

        <Route exact path="/products" element={ <Products/>}/>

        <Route  path="/bookings" element={ <Bookings/>}/>

        <Route path="/products/:id" element={ <ProductDetails/>}/>


        <Route exact path="/servicetypes" element={ <ServiceTypes/>}/>


        <Route path="/video-demos" element={ <VideoDemos/>}/>


        <Route exact path="/ptm-suppliers" element={ <Suppliers/>}/>


        <Route exact path="/suppliers" element={ <PataMtaaniSuppliers/>}/>

        <Route exact path="/supplier_home" element={<ProtectedRoute><SupplierHome/></ProtectedRoute> }/>

        <Route exact path="/account-setting" element={ <AccountSetting/>}/>

        <Route exact path="/my_stores" element={ <StoreInventory/>}/>

        <Route exact path="/engagements" element={ <EngagementRequests/>}/>


        <Route exact path="/ptm-retailors" element={ <Retailors/>}/>

        <Route path="/orders" element={ <AllOrders/>}/>

     

        

        

        {/** <Route path="/vendors" element={ <Vendors/>}/>

        <Route path="/edit-business-setting/:id" element={ <EditBusinessSetting/>}/> */}

       

        <Route exact path="/mail" element={ <EmailCompose/>}/>

        <Route path="/mailbox" element={ <MailBox/>}/>


      

    

        {/** 	<Route exact path='/explore'>
    		<Vendors data={ data } />
    	</Route>
    	<Route path='/explore/:name'>
    		<ExploreDetail data={ data } />
    	</Route>
    */}

       
    

  
       
    </Routes>


    <Routes>
    <Route exact path='/vendors' element={ <Vendors/>}>
    		
    </Route>

    <Route path='/vendors/:id'  element={ <EditBusinessSetting/>}>
    
    </Route>
    
    </Routes>

    </Suspense>

  

    <div>
    <Suspense fallback={<div><div class="dimmer active">
    <div class="spinner1">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
    </div>
</div></div>}>
      
    <Routes>
   
        <Route path="/old" element={ <Homepage/>} />

        {/* <Route path="/" element={ <HomePatamtaani/>} /> */}

        <Route path="/" element={ <SignInNew/>} />

        

        <Route path="/manual-search" element={ <HomepageWithModal/>} />

        <Route path="/signin" element={ <SignIn/>} />

        <Route path="/login" element={ <SignInNew/>} />

        <Route path="/create_account" element={ <SignUpNew/>} />

        <Route path="/forgot-password" element={ <ForgotPassword/>} />

        <Route path="/features" element={ <Features/>} />


        <Route path="/services" element={ <Services/>} />

        <Route path="/helpcentreold" element={ <HelpCentre/>} />


        <Route path="/helpcentre" element={ <HelpCentrePataMtaani/>} />


        <Route path="/get-started" element={ <SignUp/>} />



        <Route  path="/ordered-product/:pname/:lat/:lng"  element={ <OrderedProduct/>} />


        <Route  path="/searchresults/:catId/:lat/:lng"  element={ <SearviceSearchResults/>} />

        {/** <Route path="/ordered-product/:pname" element={ <OrderedProduct/>} />*/}

        <Route path="/order-now" element={ <BookingPage/>}/>


        </Routes>
        </Suspense>
       
        </div>
       
       
    
      </Router>
      </CartProvider>
      </ProductsProvider>
      </LocationDataContextInitProvider>
      </LocationDataDataProvider>
      </OrderDetailsDataProvider>
      </DataProvider>


    </AuthContext.Provider>
   
    </div>
  );
}

export default App;
