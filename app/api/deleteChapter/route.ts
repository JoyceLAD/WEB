import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const body = await request.json();
  const {name, comicId} = body;
  const deletechap = await prisma.chapter.deleteMany({
    where:{
        name,
        comicId
    }
  })

  return NextResponse.json(deletechap);
}