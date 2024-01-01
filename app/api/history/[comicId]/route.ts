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

  let history = [...(currentUser.history || [])];

  history.push(comicId);

  const user = await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      history,
    },
  });

  return NextResponse.json(user);
}
