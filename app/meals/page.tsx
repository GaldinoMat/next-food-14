import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/mealsGrid";
import { getMeals } from "@/lib/meals";
import { IMealItem } from "@/components/meals/mealItem";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals as IMealItem[]} />;
}

export default function MealsPage() {
  return (
    <>
      <div className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose you favorite meal</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
      </div>
      <div className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Loading meals...</p>}
        >
          <Meals />
        </Suspense>
      </div>
    </>
  );
}
