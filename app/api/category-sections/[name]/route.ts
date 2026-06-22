import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const [categories]: any = await db.query(`
      SELECT
        c.id,
        c.title,
        c.link,
        c.link_text,
        ci.item_name,
        ci.image_path
      FROM categories c
      LEFT JOIN category_items ci
      ON c.id = ci.category_id
    `);

    return NextResponse.json(categories);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error loading categories" },
      { status: 500 }
    );
  }
}