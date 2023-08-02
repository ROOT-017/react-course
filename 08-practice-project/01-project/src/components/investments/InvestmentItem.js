const InvestmentItem = (props) => {
  const formater = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
      <tr>
        <td>{props.item.year}</td>
        <td>{formater.format(props.item.savingsEndOfYear)}</td>
        <td>{formater.format(props.item.yearlyInterest)}</td>
        <td>
          {formater.format(
            props.item.savingsEndOfYear -
              props.initialInvestment -
              props.item.yearlyContribution * props.item.year
          )}
        </td>
        <td>
          {formater.format(
            props.initialInvestment +
              props.item.yearlyContribution * props.item.year
          )}
        </td>
      </tr>
  );
};

export default InvestmentItem;
