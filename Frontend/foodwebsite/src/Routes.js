import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./components/User/Signin";
import Signup from "./components/User/Signup";
import Home from "./Home";
import UserDashBoard from "./components/User/UserDashBoard";
import Gallery from "./components/User/Gallery";
import AdminDashboard from "./components/Admin/AdminDashboard";
import ChangePassword from "./components/User/ChangePassword";
import EditFoodItem from "./components/Admin/EditFoodItem";
import Cuisine from "./components/Admin/Cuisine";
import AddCuisine from "./components/Admin/AddCuisine";
import Cart from "./components/User/Cart";
import AddFoodItem from "./components/Admin/AddFood";
import ViewImage from "./components/Admin/ViewImage";
import Footer from "./components/Footer/Footer";
import StripePayment from "./components/User/StripePayment";
import success from "./components/User/success";
function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/user/dashboard" exact component={UserDashBoard} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/admin/dashboard" exact component={AdminDashboard} />
        <Route path="/changepassword/:from" exact component={ChangePassword} />
        <Route path="/addfooditem" exact component={AddFoodItem} />
        <Route path="/editfooditem/:id/:imageId" exact component={EditFoodItem} />
        <Route path="/cuisine" exact component={Cuisine} />
        <Route path="/addCuisine" exact component={AddCuisine} />
        <Route path="/cart/:id" exact component={Cart} />
        <Route path="/payment" exact component={StripePayment} />
        <Route path="/viewImage" exact component={ViewImage} />
        <Route path="/success/:id" exact component={success} />        
      </Switch>
      <Footer/>
    </Router>
  );
}

export default Routes;
