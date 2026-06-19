export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto mt-10 border p-6 rounded">
      <h1 className="text-3xl font-bold mb-5">
        Create Account
      </h1>

      <input
        type="text"
        placeholder="Name"
        className="border p-2 w-full mb-3"
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mb-3"
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-3"
      />

      <button className="bg-yellow-400 w-full py-2 rounded">
        Register
      </button>
    </div>
  );
}