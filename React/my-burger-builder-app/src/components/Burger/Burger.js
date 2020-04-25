import React from "react";

import classes from "./Burger.module.css";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((k) => {
      return [...Array(props.ingredients[k])].map((_, i) => {
        return <BurgerIngredient key={k + i} type={k}></BurgerIngredient>;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0)
    transformedIngredients = <p>Please add the ingredients!</p>;

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
      {transformedIngredients}
      <BurgerIngredient type="bread-buttom"></BurgerIngredient>
    </div>
  );
};

export default burger;
