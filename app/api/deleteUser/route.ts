import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const body = await request.json();
  const {name,email } = body;
  const deleteUser = await prisma.user.deleteMany({
    where:{
        name,
        email
    }
  })

  return NextResponse.json(deleteUser);
}