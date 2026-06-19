import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  try {
    const [sections]: any = await db.query(
      "SELECT * FROM category_sections ORDER BY id"
    );

    const [items]: any = await db.query(
      "SELECT * FROM category_items ORDER BY id"
    );

    const categories = sections.map((section: any) => ({
      id: section.id,
      title: section.title,
      link: section.link,
      linkText: section.link_text || "See more",
      row_no: section.row_no,
      items: items
        .filter((item: any) => item.section_id === section.id)
        .map((item: any) => ({
          name: item.name,
          img: item.image,
        })),
    }));

    return NextResponse.json({
      row1: categories.filter((c: any) => c.row_no === 1),
      row2: categories.filter((c: any) => c.row_no === 2),
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Database Error" },
      { status: 500 }
    );
  }
}