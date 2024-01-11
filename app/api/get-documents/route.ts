import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";
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
// async function getFileFromS3(pacinetId: number) {
//   const allEtagsFromMysql = await prisma.pacientToFiles.findMany({
//     where: {
//       pacientId: pacinetId,
//     },
//   });
//
//   const extractedData = allEtagsFromMysql.map((it) => ({
//     eTagFile: it.eTagFile,
//     createdAt: it.createdAt,
//   }));
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
//         if (extractedData.some((data) => data.eTagFile === item.ETag.replace(/"/g, ""))) {
//           const paramsObject = {
//             Bucket: process.env.s3_bucket_name,
//             Key: item.Key || "",
//           };
//           try {
//             const signedUrl = await getSignedUrl(
//                 s3Client,
//                 new GetObjectCommand(paramsObject),
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

async function getFileFromS3(pacinetId: number) {
  const allEtagsFromMysql = (
    await prisma.pacientToFiles.findMany({
      where: {
        pacientId: pacinetId,
      },
    })
  ).map((it) => it.eTagFile);

  const paramsList = {
    Bucket: process.env.s3_bucket_name,
  };

  const command = new ListObjectsV2Command(paramsList);
  const result = await s3Client.send(command);

  const arrayUrls: string[] = [];

  if (result.Contents) {
    for (const item of result.Contents) {
      if (item.ETag) {
        if (allEtagsFromMysql.includes(item.ETag.replace(/"/g, ""))) {
          const paramsObject = {
            Bucket: process.env.s3_bucket_name,
            Key: item.Key || "",
          };
          try {
            const signedUrl = await getSignedUrl(
              s3Client,
              new GetObjectCommand(paramsObject),
            );
            arrayUrls.push(signedUrl);
          } catch (e) {
            console.log(e);
          }
        }
      }
    }
  }

  return arrayUrls;
}

export async function GET() {
  // req: Request, context: { params: { id: string } }
  // console.log("GET", context.params.id);
  const result = await getFileFromS3(1);

  return NextResponse.json({ msg: result });
}
