import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const {title, desc, NumberChapte, image} = body;
  const NumberChapter = parseInt(NumberChapte)
  const user = await getCurrentUser()
  const authorId = user?.id
  const comic = await prisma.comic.create({
    data: {
      title,
      desc,
      NumberChapter,
      image,
      authorId,
 
    },
  });

  return NextResponse.json(comic);
}