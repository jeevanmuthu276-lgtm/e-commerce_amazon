import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "User not authenticated" },
        { status: 401 }
      );
    }

    // Get orders
    const [orders]: any = await db.query(
      "SELECT * FROM orders WHERE user_id = ? ORDER BY created_at DESC",
      [userId]
    );

    // Get items for all orders
    if (orders.length > 0) {
      const orderIds = orders.map((o: any) => o.id);
      const [items]: any = await db.query(
        "SELECT * FROM order_items WHERE order_id IN (?)",
        [orderIds]
      );

      // Map items to their respective orders
      for (const order of orders) {
        order.items = items.filter((i: any) => i.order_id === order.id);
      }
    }

    return NextResponse.json({
      success: true,
      orders,
    });
  } catch (error) {
    console.error("Fetch orders error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
