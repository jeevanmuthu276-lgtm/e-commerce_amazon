import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET() {
  const [rows]: any = await db.query(`
    SELECT
      s.id,
      s.title,
      s.subtitle,
      s.link,
      s.display_order,
      s.type,
      s.ad_image,
      i.id AS item_id,
      i.name,
      i.image,
      i.link AS item_link
    FROM category_sections s
    LEFT JOIN category_items i
      ON s.id = i.section_id
    ORDER BY s.display_order
  `);

  const sectionsMap = new Map();

  rows.forEach((row: any) => {
    if (!sectionsMap.has(row.id)) {
      sectionsMap.set(row.id, {
        id: row.id,
        title: row.title,
        subtitle: row.subtitle,
        link: row.link,
        display_order: row.display_order,
        type: row.type,
        adImage: row.ad_image,
        items: []
      });
    }

    if (row.item_id) {
      sectionsMap.get(row.id).items.push({
        id: row.item_id,
        name: row.name,
        image: row.image,
        link: row.item_link
      });
    }
  });

  const sections = Array.from(sectionsMap.values());

  return NextResponse.json(sections);
}