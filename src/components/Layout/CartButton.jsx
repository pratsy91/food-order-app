import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../store/cart-content";

const CartButton = (props) => {
  const cartctx = useContext(CartContext);

  const numofitems = cartctx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClickShow}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numofitems}</span>
    </button>
  );
};

export default CartButton;
