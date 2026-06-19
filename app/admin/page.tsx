export default function AdminPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="border p-5 rounded shadow">
          <h2 className="font-semibold">Products</h2>
          <p>Manage Products</p>
        </div>

        <div className="border p-5 rounded shadow">
          <h2 className="font-semibold">Orders</h2>
          <p>Manage Orders</p>
        </div>

        <div className="border p-5 rounded shadow">
          <h2 className="font-semibold">Users</h2>
          <p>Manage Users</p>
        </div>
      </div>
    </div>
  );
}