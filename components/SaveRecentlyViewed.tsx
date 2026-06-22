"use client";

import { useEffect } from "react";

export default function SaveRecentlyViewed({
  productId,
}: {
  productId: number;
}) {
  useEffect(() => {
    const viewed = JSON.parse(
      localStorage.getItem("recentlyViewed") || "[]"
    );

    const updated = [
      productId,
      ...viewed.filter((id: number) => id !== productId),
    ].slice(0, 10);

    localStorage.setItem(
      "recentlyViewed",
      JSON.stringify(updated)
    );
  }, [productId]);

  return null;
}   