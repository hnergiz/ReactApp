import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import { Switch, Route } from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Switch>
        <Route path="/" exact component={Dashboard } />
        <Route path="/product" component={Dashboard } />
        <Route path="/saveproduct/:productId" component={AddOrUpdateProduct } />
        <Route path="/saveproduct" component={AddOrUpdateProduct } />
        <Route path="/cart" component={CartDetail } />
        <Route component={NotFound } />
      </Switch>
    </Container>
  );
}

export default App;
