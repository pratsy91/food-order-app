import React from "react";
import CartContext from "./cart-content";

const CartProvider = (props) => {
  const addItemHandler = () => {};

  const removeItemHandler = () => {};

  const CartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return <CartContext>{PaymentResponse.children}</CartContext>;
};

export default CartProvider;
