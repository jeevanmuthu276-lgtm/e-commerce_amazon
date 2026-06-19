import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const [sections]: any = await db.query(`
      SELECT * FROM category_sections
      ORDER BY display_order
    `);

    const categories = [];

    for (const section of sections) {
      const [items]: any = await db.query(
        `SELECT * FROM category_items
         WHERE section_id = ?`,
        [section.id]
      );

      categories.push({
        id: section.id,
        title: section.title,
        link: section.link,
        linkText: section.link_text,
        items,
      });
    }

    return NextResponse.json(categories);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}