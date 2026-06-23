import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  const decodedName = decodeURIComponent(name);

  try {
    // Try to find products that match the category name
    const [rows]: any = await db.query(
      "SELECT * FROM products WHERE category = ? OR name LIKE ? LIMIT 16",
      [decodedName, `%${decodedName}%`]
    );

    // If we didn't find any exact matches, return some random products 
    // so the page doesn't look empty for the demo!
    if (rows.length === 0) {
      const [fallbackRows]: any = await db.query(
        "SELECT * FROM products LIMIT 8"
      );
      return NextResponse.json(fallbackRows);
    }

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Database error in category fetch:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}
