import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const {name, comicId, imageurl} = body;
  const chapter = await prisma.chapter.create({
    data: {
      name,
      comicId, 
      imageurl
    },
  });

  return NextResponse.json(chapter);
}