import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import stylse from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = ` $${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      price: props.price,
      amount,
      name: props.name,
    });
  };
  return (
    <li className={stylse.meal}>
      <div>
        <h1>{props.name}</h1>
        <div className={stylse.description}>{props.description}</div>
        <div className={stylse.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
