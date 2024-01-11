import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";
import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
  region: process.env.region_aws,
  credentials: {
    accessKeyId: process.env.access_key_aws || "",
    secretAccessKey: process.env.secret_access_key || "",
  },
});

// async function getFileFromS3(pacinetId: any) {
//   console.log(typeof pacinetId);
//   const allEtagsFromMysql = (
//     await prisma.pacientToFiles.findMany({
//       where: {
//         pacientId: pacinetId,
//       },
//     })
//   ).map((it) => it.eTagFile);
//
//   const paramsList = {
//     Bucket: process.env.s3_bucket_name,
//   };
//
//   const command = new ListObjectsV2Command(paramsList);
//   const result = await s3Client.send(command);
//
//   const arrayUrls: string[] = [];
//
//   if (result.Contents) {
//     for (const item of result.Contents) {
//       if (item.ETag) {
//         if (allEtagsFromMysql.includes(item.ETag.replace(/"/g, ""))) {
//           const paramsObject = {
//             Bucket: process.env.s3_bucket_name,
//             Key: item.Key || "",
//           };
//           try {
//             const signedUrl = await getSignedUrl(
//               s3Client,
//               new GetObjectCommand(paramsObject),
//             );
//             arrayUrls.push(signedUrl);
//           } catch (e) {
//             console.log(e);
//           }
//         }
//       }
//     }
//   }
//
//   return arrayUrls;
// }

async function getFileFromS3(pacientId: number) {
  console.log("aici e in functie: ", pacientId);
  const allEtagsFromMysql = await prisma.pacientToFiles.findMany({
    where: {
      pacientId: Number(pacientId),
    },
  });

  const extractedData = allEtagsFromMysql.map((it) => ({
    eTagFile: it.eTagFile,
    createdAt: it.createdAt,
  }));

  const paramsList = {
    Bucket: process.env.s3_bucket_name,
  };

  const command = new ListObjectsV2Command(paramsList);
  const result = await s3Client.send(command);

  const arrayUrls: { url: string; createdAt: string }[] = [];

  if (result.Contents) {
    for (const item of result.Contents) {
      if (item.ETag) {
        if (
          extractedData.some(
            (data) => data.eTagFile === item.ETag.replace(/"/g, ""),
          )
        ) {
          const paramsObject = {
            Bucket: process.env.s3_bucket_name,
            Key: item.Key || "",
          };
          try {
            const signedUrl = await getSignedUrl(
              s3Client,
              new GetObjectCommand(paramsObject),
            );
            arrayUrls.push({
              url: signedUrl,
              createdAt: item.LastModified?.toISOString() || "",
            });
          } catch (e) {
            console.log(e);
          }
        }
      }
    }
  }

  return arrayUrls;
}

export async function POST(request: Request) {
  // const { searchParams } = new URL(request.url);
  // const id = searchParams.get("id")?.replace(/^"|"$/g, "");
  // console.log(id);
  // const { id } = (await request.json()) as {
  //   id: number;
  // };
  const { id } = await request.json();
  console.log("lalala", id);
  //console.log("PLLL", id);
  const result = await getFileFromS3(id);
  return NextResponse.json({ data: result }, { status: 200 });
}

//{ params }: { params: { id: string } }
