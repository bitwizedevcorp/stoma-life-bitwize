import { istoricPacient } from "@/models";
import { NextResponse } from "next/server";
import dbMongoConnect from "@/app/lib/mongodb";

export async function POST(req: Request) {
  await dbMongoConnect();
  const {
    numePacient,
    prenumePacient,
    doctorId,
    pacientId,
    istoric,
    data,
    lucrare,
  } = (await req.json()) as {
    numePacient: string;
    prenumePacient: string;
    doctorId: string;
    pacientId: string;
    istoric: string;
    data: string;
    lucrare: string;
  };

  console.log("asta e lucrare: ", lucrare);

  const istoricPacientToSave = new istoricPacient({
    numePacient: numePacient,
    prenumePacient: prenumePacient,
    doctorId: doctorId,
    pacientId: pacientId,
    istoric: istoric,
    data: data,
    lucrare: lucrare,
  });

  await istoricPacientToSave.save();
  return NextResponse.json({ message: "Done" });
}
