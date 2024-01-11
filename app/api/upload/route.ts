import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { prisma } from "@/app/lib/prisma";

const s3Client = new S3Client({
  region: process.env.region_aws,
  credentials: {
    accessKeyId: process.env.access_key_aws || "",
    secretAccessKey: process.env.secret_access_key || "",
  },
});

async function uploadFileToS3(file: any, filename: string, pacientId: number) {
  const fileBuffer = file;
  const params = {
    Bucket: process.env.s3_bucket_name,
    Key: `stomaFolder/${filename}}`,
    Body: fileBuffer,
    ContentType: "image/jpg",
  };

  const command = new PutObjectCommand(params);
  const result = await s3Client.send(command);

  if (result.ETag) {
    try {
      const pacientToFiles = await prisma.pacientToFiles.create({
        data: {
          pacientId: Number(pacientId),
          eTagFile: result.ETag.slice(1, -1),
        },
      });
      if (pacientToFiles) {
        return pacientToFiles;
      }
    } catch (e) {
      console.log(e);
    }
  }
}
export async function POST(request: any) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const pacientId = formData.get("pacientId");

    if (!file) {
      return NextResponse.json({ error: "File is required." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = await uploadFileToS3(buffer, file.name, pacientId);

    return NextResponse.json({ success: true, fileName });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
