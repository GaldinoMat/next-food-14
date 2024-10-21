import React from "react";

import classes from "./mealsGrid.module.css";
import MealItem, { IMealItem } from "./mealItem";

interface IMealsGrid {
  meals: IMealItem[];
}

export default function MealsGrid({ meals }: IMealsGrid) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal: IMealItem) => (
        <li key={meal.slug}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
