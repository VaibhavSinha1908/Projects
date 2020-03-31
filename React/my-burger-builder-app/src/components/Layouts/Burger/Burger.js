import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import classes from "Burger.css";
import burgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  return (
    <div className={classes.Burger}>
      <burgerIngredient type="bread-top"></burgerIngredient>
      <burgerIngredient type="bread-top"></burgerIngredient>
      <burgerIngredient type="bread-top"></burgerIngredient>
      <burgerIngredient type="bread-top"></burgerIngredient>
      <burgerIngredient type="bread-top"></burgerIngredient>
    </div>
  );
};

export default burger;
