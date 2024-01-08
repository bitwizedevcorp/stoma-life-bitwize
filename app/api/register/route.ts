import { prisma } from "@/app/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, surrname, email, password, judet, oras, numar_telefon } =
      (await req.json()) as {
        name: string;
        surrname: string;
        email: string;
        password: string;
        judet: string;
        oras: string;
        numar_telefon: string;
      };
    const hashed_password = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        surrname,
        email: email.toLowerCase(),
        password: hashed_password,
        judet,
        oras,
        numar_telefon,
      },
    });

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 },
    );
  }
}
