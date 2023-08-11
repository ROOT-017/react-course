import React, { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { sendRequest } from "../../api/getMeal";

const requestConfig = {
  method: "GET",
  url: "/meals.json",
};
const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpErr, setHttpError] = useState(null);

  const fetchMeal = async () => {
    setIsLoading(true);
    let res = await sendRequest(requestConfig);
    let data = [];
    if (res.status) {
      setIsLoading(false);
      setHttpError(res);
      return;
    }
    for (const key in res) {
      data.push({ ...res[key], id: key });
    }
    setMeals([...data]);
    setIsLoading(false);
  };
  const mealsList =
    meals.length > 0
      ? meals.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
          />
        ))
      : null;
  useEffect(() => {
    fetchMeal();
  }, []);
  var state;

  if (isLoading) {
    state = <p>Loading Meals Please wait...</p>;
  }
  if (!isLoading && !meals.length) {
    state = <p>No meals Found</p>;
  }
  if (httpErr) {
    state = httpErr.error;
  }

  return (
    <section className={classes.meals}>
      <Card>
        {meals.length ? mealsList : null}
        {state}
      </Card>
    </section>
  );
};

export default AvailableMeals;
