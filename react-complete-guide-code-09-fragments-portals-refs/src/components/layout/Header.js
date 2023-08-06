import React from "react";

import styles from "./Header.module.css";
import mealImage from "../../assets/meals.jpg";
import HeaderCarButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>TERENCE Meals</h1>
        <HeaderCarButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealImage} alt="meal_image" />
      </div>
    </>
  );
};

export default Header;
