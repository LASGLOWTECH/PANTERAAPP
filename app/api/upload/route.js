// import { NextResponse } from "next/server";
// import path from "path";
// import { writeFile } from "fs/promises";

// export async function POST(req) {
//   try {
//     const data = await req.formData();
//     const file = data.get("file");

//     if (!file) {
//       return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
//     }

//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);

//     const uploadDir = path.join(process.cwd(), "public/uploads");
//     const filename = `${Date.now()}-${file.name}`;
//     const filepath = path.join(uploadDir, filename);

//     await writeFile(filepath, buffer);

//     return NextResponse.json({
//       url: `/uploads/${filename}`,
//       success: true
//     });

//   } catch (err) {
//     console.error("UPLOAD ERROR:", err);
//     return NextResponse.json({ error: "Upload failed" }, { status: 500 });
//   }
// }
import cloudinary from "@/lib/cloudinary";

export const config = {
  api: {
    bodyParser: false, // important for file uploads
  },
};

export const POST = async (req) => {
  try {
    const formData = await req.formData();
    const file = formData.get("file"); // File object from frontend

    if (!file) {
      return new Response(
        JSON.stringify({ error: "No file uploaded" }),
        { status: 400 }
      );
    }

    // Convert file to base64 for Cloudinary
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64 = buffer.toString("base64");
    const dataUri = `data:${file.type};base64,${base64}`;

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(dataUri, {
      folder: "events",       // optional: Cloudinary folder
      use_filename: true,
      unique_filename: true,
    });

    return new Response(
      JSON.stringify({ url: result.secure_url, success: true }),
      { status: 200 }
    );

  } catch (err) {
    console.error("Upload failed:", err);
    return new Response(
      JSON.stringify({ error: "Upload failed" }),
      { status: 500 }
    );
  }
};
