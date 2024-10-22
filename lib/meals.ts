import fs from "node:fs";
import { IMealFormData, IMealResponse } from "@/types/types";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  //   throw new Error("Error fetching meals");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug: string): IMealResponse {
  return db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug) as IMealResponse;
}

export async function saveMeal(meal: IMealFormData) {
  meal.slug = slugify(String(meal.title), { lower: true });
  meal.instructions = xss(String(meal.instructions));

  if (meal.image) {
    const image = meal.image as File;
    const extension = image.name.split(".").pop();
    const filename = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${filename}`);
    const bufferedImage = await image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) {
        throw new Error("Saving image failed");
      }
    });

    meal.image = `/images/${filename}`;

    db.prepare(
      `
      INSERT INTO meals
      (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (
         @title,
         @summary,
         @instructions,
         @creator,
         @creator_email,
         @image,
         @slug
         )`
    ).run(meal);
  }
}
