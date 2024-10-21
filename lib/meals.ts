import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  //   throw new Error("Error fetching meals");
  return db.prepare("SELECT * FROM meals").all();
}

interface IMealResponse {
  title: string;
  slug: string;
  image: string;
  summary: string;
  creator: string;
  creator_email: string;
  instructions: string
}

export function getMeal(slug: string): IMealResponse {
  return db
    .prepare("SELECT * FROM meals WHERE slug = ?")
    .get(slug) as IMealResponse;
}
