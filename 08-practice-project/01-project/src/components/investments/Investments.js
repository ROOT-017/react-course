import React from "react";
import styles from "./Investment.module.css";
import InvestmentItem from "./InvestmentItem";

const Investment = (props) => {
  if (props.yearlyData.length < 1)
    return <p className={styles["not_investment"]}> Add Investment above</p>;

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.yearlyData.map((data) => (
          <InvestmentItem
            item={data}
            initialInvestment={props.initialInvestment}
            key={data.year}
          />
        ))}
      </tbody>
    </table>
  );
};
export default Investment;
