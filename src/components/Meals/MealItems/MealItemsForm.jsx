import React, { useRef, useState } from "react";
import classes from "./MealItemsForm.module.css";
import Input from "../../UI/Input";

const MealItemsForm = (props) => {
  const amountInputRef = useRef();
  const [enteredAmountValue, setenteredAmountValue] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountnum = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountnum < 1 ||
      enteredAmountnum > 5
    ) {
      setenteredAmountValue(false);
      return;
    }
    props.onAddToCart(enteredAmountnum);
    console.log(enteredAmountnum);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!enteredAmountValue && <p>Enter a Valid Amount(1-5)</p>}
    </form>
  );
};

export default MealItemsForm;
