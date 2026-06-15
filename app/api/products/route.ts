import { db } from "@/lib/db";
import { NextResponse } from "next/server";

// SAVE PRODUCT
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, description, price, image, category } = body;

    await db.query(
      "INSERT INTO products (name, description, price, image, category) VALUES (?, ?, ?, ?, ?)",
      [name, description, price, image, category]
    );

    return NextResponse.json({ message: "Product saved successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Error saving product" }, { status: 500 });
  }
}

// GET PRODUCTS (optional)
export async function GET() {
  const [rows] = await db.query("SELECT * FROM products");
  return NextResponse.json(rows);
}