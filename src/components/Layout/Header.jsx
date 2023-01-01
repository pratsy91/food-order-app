import React from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import CartButton from "./CartButton";

const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A Table full of Food" />
      </div>
    </React.Fragment>
  );
};

export default Header;
