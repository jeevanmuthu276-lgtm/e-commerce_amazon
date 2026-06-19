import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(req: Request) {
  try {
    console.log("API HIT");

    const body = await req.json();
    console.log("BODY:", body);

    const {
      seller_name,
      business_name,
      email,
      phone,
      address,
    } = body;

    if (
      !seller_name ||
      !business_name ||
      !email ||
      !phone
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill all required fields",
        },
        { status: 400 }
      );
    }

    await db.query(
      `INSERT INTO sellers
      (seller_name, business_name, email, phone, address)
      VALUES (?, ?, ?, ?, ?)`,
      [
        seller_name,
        business_name,
        email,
        phone,
        address || "",
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Seller Registered Successfully",
    });

  } catch (error) {
    console.error("Seller Registration Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Database Error",
      },
      { status: 500 }
    );
  }
}