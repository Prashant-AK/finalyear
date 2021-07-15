import React from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SearchPage from "./Components/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import AdNav from "./Components/admin/Navbar";
import Dashboard from "./Components/admin/Dashboard";
import Customer from "./Components/admin/Customer";
import TotalBooking from "./Components/admin/TotalBooking";
import ViewHotel from "./Components/admin/ViewHotel";
import AddHotel from "./Components/admin/AddHotel";
import CustomerQuiries from "./Components/admin/CustomerQuiries";
function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/search">
            <Header />
            <SearchPage />
            <Footer />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/myprofile">
            <Header />
            <SearchPage />
            <Footer />
          </Route>
          <Route exact path="/admin">
            <AdNav />
            <Dashboard />
          </Route>
          <Route exact path="/admin/customers">
            <AdNav />
            <Customer />
          </Route>
          <Route exact path="/admin/total-booking">
            <AdNav />
            <TotalBooking />
          </Route>
          <Route exact path="/admin/vw-hotel">
            <AdNav />
            <ViewHotel />
          </Route>
          <Route exact path="/admin/add-hotel">
            <AdNav />
            <AddHotel />
          </Route>
          <Route exact path="/admin/c-quiries">
            <AdNav />
            <CustomerQuiries />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
