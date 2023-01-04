import React, { useContext } from "react";
import classes from "./MealItems.module.css";
import MealItemsForm from "./MealItemsForm";
import CartContext from "../../../store/cart-content";

const MealItems = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartctx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemsForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItems;
