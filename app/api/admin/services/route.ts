import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request: Request) {
  const authorization = request.headers.get("authorization") || "";
  const token = authorization.replace("Bearer ", "").trim();

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: userData, error: userError } = await supabaseAdmin.auth.getUser(token);
  if (userError || !userData.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const adminEmails = process.env.ADMIN_EMAIL?.split(",").map((value) => value.trim().toLowerCase()) ?? [];
  if (adminEmails.length === 0) {
    return NextResponse.json({ error: "Server misconfiguration: ADMIN_EMAIL not set." }, { status: 500 });
  }

  const userEmail = userData.user.email.toLowerCase();
  if (!adminEmails.includes(userEmail)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const uploadType = formData.get("uploadType")?.toString();
  const title = formData.get("title");
  const description = formData.get("description");
  const image = formData.get("image");

  if (!uploadType || !title || !description || !image || !(image instanceof File)) {
    return NextResponse.json({ error: "Missing upload type, title, description, or image." }, { status: 400 });
  }

  if (uploadType !== "service") {
    return NextResponse.json({ error: "Invalid upload type." }, { status: 400 });
  }

  const bucket = process.env.SUPABASE_STORAGE_BUCKET || "site-images";
  const fileName = `${Date.now()}-${image.name.replace(/\s+/g, "-").toLowerCase()}`;

  const { error: uploadError } = await supabaseAdmin.storage
    .from(bucket)
    .upload(fileName, image, { cacheControl: "3600", upsert: false, contentType: image.type });

  if (uploadError) {
    return NextResponse.json({ error: uploadError.message }, { status: 500 });
  }

  const { data: publicUrlData } = await supabaseAdmin.storage
    .from(bucket)
    .getPublicUrl(fileName);

  if (!publicUrlData.publicUrl) {
    return NextResponse.json({ error: "Unable to resolve public URL." }, { status: 500 });
  }

  const imageUrl = publicUrlData.publicUrl;

  const { error: insertError } = await supabaseAdmin
    .from("services")
    .insert([{ title: title.toString(), description: description.toString(), image_url: imageUrl }]);

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Upload successful." });
}
