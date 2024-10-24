"use server";

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

function isInvalid(text: string) {
  return !text || String(text).trim() === "";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function submitMealForm(prevState: any, formData: any) {
  const meal = {
    slug: "",
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalid(String(meal.title)) ||
    isInvalid(String(meal.summary)) ||
    isInvalid(String(meal.instructions)) ||
    isInvalid(String(meal.creator)) ||
    isInvalid(String(meal.creator_email)) ||
    !String(meal.creator_email).includes("@") ||
    !meal.image
  ) {
    return {
      message: "Invalid input.",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals", "layout");
  redirect("/meals");
}
