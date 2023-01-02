import React from "react";
import classes from "./MealItems.module.css";
import MealItemsForm from "./MealItemsForm";

const MealItems = (props) => {
  let price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemsForm />
      </div>
    </li>
  );
};

export default MealItems;
