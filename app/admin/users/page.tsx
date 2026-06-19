export default function AdminUsersPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-5">
        Users Management
      </h1>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-2">1</td>
            <td className="border p-2">Arun</td>
            <td className="border p-2">
              arun@gmail.com
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}