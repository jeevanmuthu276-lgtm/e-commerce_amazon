export default function AdminOrdersPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-5">
        Orders Management
      </h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-2">1001</td>
            <td className="border p-2">Arun</td>
            <td className="border p-2">Delivered</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}