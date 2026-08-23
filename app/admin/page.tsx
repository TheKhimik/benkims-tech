"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const router = useRouter();
  const [session, setSession] = useState<any | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title || !description || !imageFile) {
      setStatus("Please enter title, description, and choose an image.");
      return;
    }

    if (!session?.access_token) {
      setStatus("Your session has expired. Please log in again.");
      return;
    }

    setSubmitting(true);
    setStatus(null);

    const formData = new FormData();
    formData.append("uploadType", "service");
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", imageFile);

    const response = await fetch("/api/admin/services", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
      body: formData,
    });

    const body = await response.json();
    if (response.ok) {
      setStatus("Upload successful.");
      setTitle("");
      setDescription("");
      setImageFile(null);
    } else {
      setStatus(body.error || "Upload failed. Please try again.");
    }

    setSubmitting(false);
  };

  useEffect(() => {
    const initialize = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };

    initialize();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (session === null) return;
    if (!session) {
      router.replace("/login");
    }
  }, [session, router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.replace("/login");
  };

  if (session === null) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-lg text-gray-700">Checking your admin session…</p>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
        <div>
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <p className="text-sm text-gray-600 mt-2">
            Signed in as <strong>{session?.user?.email}</strong>
          </p>
        </div>

        <button
          type="button"
          onClick={handleSignOut}
          className="rounded-lg bg-gray-800 px-5 py-3 text-white hover:bg-gray-900"
        >
          Sign Out
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3"
            rows={4}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
            className="mt-2 block w-full"
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {submitting ? "Uploading..." : "Upload Image"}
        </button>

        {status ? <p className="text-sm text-gray-700">{status}</p> : null}
      </form>
    </main>
  );
}
