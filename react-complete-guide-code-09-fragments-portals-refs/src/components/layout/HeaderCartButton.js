import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCarButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const [btnIsHighlighlited, setBtnIsHighlighlited] = useState(false);
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${
    btnIsHighlighlited ? styles.bump : null
  } `;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighlited(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighlited(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCarButton;
