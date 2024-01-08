import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(req: Request, { params }: { params: { id: any } }) {
  try {
    const {
      nume,
      prenume,
      email,
      scara,
      bloc,
      apartament,
      judet,
      town,
      doctorId,
      istoricPacientId,
      cnp,
      date_of_birth,
      telefon,
      number,
      street,
    } = (await req.json()) as {
      nume: string;
      prenume: string;
      email: string;
      scara: string;
      bloc: string;
      apartament: string;
      judet: string;
      town: string;
      doctorId: string;
      istoricPacientId: string;
      cnp: string;
      date_of_birth: string;
      telefon: string;
      number: string;
      street: string;
    };

    const pacient = await prisma.pacient.update({
      where: {
        id: +params.id,
      },
      data: {
        first_name: nume,
        last_name: prenume,
        email,
        scara,
        bloc,
        apartament,
        judet,
        town,
        istoricPacientId,
        cnp,
        date_of_birth,
        telefon,
        number,
        street,
        doctorId,
      },
    });
    return NextResponse.json({
      message: "Success",
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
