import db from "@/lib/db";
import SaveRecentlyViewed from "@/components/SaveRecentlyViewed";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const [rows]: any = await db.query(
    "SELECT * FROM products WHERE id = ?",
    [params.id]
  );

  const product = rows[0];

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

 return (
  <div className="p-10">

    <SaveRecentlyViewed productId={product.id} />

    <img
      src={product.image}
      alt={product.name}
      className="w-80 h-80 object-contain"
    />

    <h1 className="text-3xl font-bold mt-4">
      {product.name}
    </h1>

    <p className="mt-3">{product.description}</p>

    <p className="text-2xl font-bold mt-3">
      ₹{product.price}
    </p>

  </div>
);
}