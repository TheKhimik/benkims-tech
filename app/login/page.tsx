"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email) {
      setStatus("Please enter your email address.");
      return;
    }

    setLoading(true);
    setStatus(null);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/admin`,
      },
    });

    if (error) {
      setStatus(error.message);
    } else {
      setStatus("Check your email for the login link.");
    }

    setLoading(false);
  };

  return (
    <main className="max-w-md mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-6">Admin Login</h1>
      <p className="mb-8 text-gray-600">
        Enter your email address and use the Supabase magic link to access the admin dashboard.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3"
          placeholder="you@example.com"
        />

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send login link"}
        </button>

        {status ? <p className="text-sm text-gray-700">{status}</p> : null}
      </form>
    </main>
  );
}
