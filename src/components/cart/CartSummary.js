import React, { Component } from "react"
import { connect } from "react-redux"
import * as cartActions from "../../redux/actions/cartActions"
import { bindActionCreators } from "redux"
import { Link } from "react-router-dom"
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";

class CartSummary extends Component {
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  }
  renderSummary() {
    return(
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Your Cart
      </DropdownToggle>
      <DropdownMenu end>
        {this.props.cart.map(cartItem=>(
            <DropdownItem key={cartItem.product.id}>
            <Badge color="danger" onClick={()=>this.props.actions.removeFromCart(cartItem.product)}>X</Badge>
              {cartItem.product.productName}
            <Badge color="success">{cartItem.quantity}</Badge>
            </DropdownItem>
        ))}
        <DropdownItem divider />
        <Link to="/cart"><DropdownItem >Go to Cart</DropdownItem></Link>
      </DropdownMenu>
    </UncontrolledDropdown>
    )
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){
  return{
    actions:{
      removeFromCart : bindActionCreators(cartActions.removeFromCart, dispatch)
    }
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
