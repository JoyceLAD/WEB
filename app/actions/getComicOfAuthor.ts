import prisma from "@/lib/prismadb";

export interface IParams {
  authorId?: string;
}

export default async function getComicAuthor(params: IParams) {
  try {
    const { authorId } = params;

    const comicinfo = await prisma.comic.findMany({
      where: {
        authorId
      }
    });

    if (!comicinfo) {
      return null;
    }

   const safecoCmiclist = comicinfo.map((c) =>({
    ...c,
    createdAt: c.createdAt.toString(),
}))
return safecoCmiclist
  } catch (error: any) {
    throw new Error(error.message);
  }
}
