import React from "react";
import Aux from "../../../hoc/AuxillarNode";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey} </span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: AU${props.totalPrice.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.onCancel}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.onContinue}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;