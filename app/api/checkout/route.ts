import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { userId, total, items } = await req.json();

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "User not authenticated" },
        { status: 401 }
      );
    }

    if (!items || items.length === 0) {
      return NextResponse.json(
        { success: false, message: "Cart is empty" },
        { status: 400 }
      );
    }

    // Insert order
    const [orderRes]: any = await db.query(
      "INSERT INTO orders (user_id, total, status) VALUES (?, ?, ?)",
      [userId, total, "Completed"]
    );

    const orderId = orderRes.insertId;

    // Insert order items
    for (const item of items) {
      await db.query(
        "INSERT INTO order_items (order_id, product_id, name, image, quantity, price) VALUES (?, ?, ?, ?, ?, ?)",
        [orderId, item.id.toString(), item.name, item.image, item.quantity, item.price]
      );
    }

    return NextResponse.json({
      success: true,
      message: "Order placed successfully",
      orderId,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
