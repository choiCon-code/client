import "./App.css";
import 'react-quill-new/dist/quill.snow.css';

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Category from "./pages/Category";
import Admin from "./pages/Admin";
import AdminManagerProduct from "./pages/AdminManagerProduct";
import AdminManagerCategory from "./pages/AdminManagerCategory";
import Home from "./pages/Home";
import Checkouts from "./pages/Checkouts";

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/category/:slug" exact component={Category} />
          <Route path="/checkouts" exact component={Checkouts} />



          {/* admin routers */}
          <Route path="/admin" exact component={Admin} />
          <Route path="/admin/products" exact component={AdminManagerProduct} />
          <Route path="/admin/categories" exact component={AdminManagerCategory} />
        </Switch>
      </MainLayout>
    </Router>
  );
}
