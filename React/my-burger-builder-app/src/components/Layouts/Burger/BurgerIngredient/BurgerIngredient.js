import React from "react";
import PropTypes from "prop-types";

import classes from "./BurgerIngredient.css";

const burgerIngredient = props => {
  let ingredient = null;
  switch (props.type) {
    case "bread-buttom":
      ingredient = <div className={classes.BreadBottom}></div>;
      break;

    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;

    case "meat":
      ingredient = <div className={classes.Meat}></div>;
      break;

    case "cheese":
      ingredient = <div className={classes.Cheese}></div>;
      break;
    case "Bacon":
      ingredient = <div className={classes.Bacon}></div>;
      break;
    case "salad":
      ingredient = <div className={classes.Salad}></div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

//Adding validation to the props passed on this function using Prop-Type package.
burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default burgerIngredient;
