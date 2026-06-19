export default function SellerLoginPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">
        Seller Login
      </h1>

      <form className="space-y-4 max-w-md">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-yellow-400 px-6 py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}