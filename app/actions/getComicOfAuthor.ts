import prisma from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export interface IParams {
  authorId: string;
}

export default async function getComicAuthor(params: IParams) {
  try {
    const { authorId } = params;
    const user = await getCurrentUser()
    const authorId1 =  user?.id
    const comicinfo = await prisma.comic.findMany({
      where: {
        authorId:authorId1
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
