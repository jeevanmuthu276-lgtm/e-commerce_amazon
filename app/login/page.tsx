"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/lib/userStore";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useUserStore((state) => state.setUser);

const router = useRouter();

 async function handleLogin(e: React.FormEvent) {
  e.preventDefault();

  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await res.json();

  if (data.success) {
    setUser(data.user);
    alert("Login Successful");

    // Redirect to Home Page
    router.push("/");
  } else {
    alert(data.message);
  }
}

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="border p-6 rounded w-[350px]">
        <h1 className="text-3xl font-medium mb-4">
          Sign In
        </h1>

        <form onSubmit={handleLogin}>
          <label>Email</label>

          <input
            className="border p-2 w-full mb-3"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <label>Password</label>

          <input
            type="password"
            className="border p-2 w-full mb-3"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            className="bg-yellow-400 w-full py-2 rounded"
          >
            Continue
          </button>
        </form>
        <div className="mt-6">
  <div className="flex items-center">
    <hr className="flex-grow border-gray-300" />
    <span className="px-2 text-sm text-gray-500">
      New to Amazon?
    </span>
    <hr className="flex-grow border-gray-300" />
  </div>

  <a
    href="/register"
    className="block mt-4 text-center border border-gray-400 rounded py-2 hover:bg-gray-100"
  >
    Create your Amazon account
  </a>
</div>
      </div>
    </div>
  );
}