import React, { useContext, useState } from "react";

import { sendRequest } from "../../api/getMeal";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import CheckOut from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [httpErr, setHttpError] = useState(null);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const isCheckoutHandler = (props) => {
    setIsCheckout(true);
  };

  const modelCheckOut = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems ? (
        <button className={classes.button} onClick={isCheckoutHandler}>
          Checkout
        </button>
      ) : null}
    </div>
  );

  const submitOrderHandler = async (props) => {
    setIsSubmitting(true);
    const res = await sendRequest({
      method: "POST",
      data: {
        client: props,
        orderedIitem: cartCtx.items,
      },
      url: "/orders.json",
    });

    setIsSubmitting(false);
    if (res.status) {
      // setIsLoading(false);
      // setHttpError(res);
      console.log("There was an error");
      return;
    }
    console.log(res);
    if (typeof res.name === "string") {
      setDidSubmit(true);
      cartCtx.clearCart();
    }
  };

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {!isCheckout && modelCheckOut}
      {isCheckout && (
        <CheckOut onClose={props.onClose} onConfirm={submitOrderHandler} />
      )}
    </>
  );

  const didSubmittingModalContent = (
    <>
      <p>Order placed successfully, We will Contact you</p>
      <button className={classes.button} onClick={props.onClose}>
        Close
      </button>
    </>
  );
  const isSubmittingModalContent = <p>Placing your order. Please wait...</p>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmittingModalContent}
    </Modal>
  );
};

export default Cart;
