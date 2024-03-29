import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const body = await request.json();
  const {title, NumberChapter} = body;
  const deleteUser = await prisma.comic.deleteMany({
    where:{
        title,
        NumberChapter
    }
  })

  return NextResponse.json(deleteUser);
}