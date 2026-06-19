type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 rounded">
      <img
        src={product.image}
        alt={product.name}
        width={200}
      />

      <h2>{product.name}</h2>

      <p>{product.description}</p>

      <p>₹{product.price}</p>
    </div>
  );
}