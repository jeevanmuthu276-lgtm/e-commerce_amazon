import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// GET all products
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    let query = "SELECT * FROM products";
    let params: any[] = [];

    if (category) {
      query += " WHERE category = ?";
      params = [category];
    }

    const [rows] = await db.query(query, params);
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch" },
      { status: 500 }
    );
  }
}

// POST - Save product with image path to DB
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, price, image, category } = body;

    const [result] = await db.query(
      "INSERT INTO products (name, description, price, image, category) VALUES (?, ?, ?, ?, ?)",
      [name, description, price, image, category]
    );

    return NextResponse.json({
      success: true,
      message: "Product saved!",
      result,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save product" },
      { status: 500 }
    );
  }
}