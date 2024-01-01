import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

interface IPrisma {
  comicId?: string;
}

export async function POST(request: Request, { params }: { params: IPrisma }) {
  const currentUser = await getCurrentUser();
  console.log(currentUser)
  if (!currentUser) {
    return NextResponse.error();
  }

  const { comicId } = params;

  if (!comicId || typeof comicId !== "string") {
    throw new Error("Invalid Id");
  }

  let followId = [...(currentUser.followId || [])];

  followId.push(comicId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      followId,
    },
  });

  return NextResponse.json(user);
}

export async function DELETE(
  request: Request,
  { params }: { params: IPrisma }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { comicId } = params;

  if (!comicId || typeof comicId !== "string") {
    throw new Error("Invalid Id");
  }

  let followId = [...(currentUser.followId || [])];

  followId = followId.filter((id) => id !== comicId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      followId,
    },
  });

  return NextResponse.json(user);
}