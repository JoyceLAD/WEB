import prisma from "@/lib/prismadb";

interface IParams {
  comicId?: string;
}

export default async function getComicbyId(params: IParams) {
  try {
    const { comicId } = params;

    const comicinfo = await prisma.comic.findUnique({
      where: {
        id: comicId,
      },
      select: {
        title: true,
        desc:true,
        NumberChapter:true,
        image:true,
        chapters:true,
        authorId:true,
        createdAt:true,
        updatedAt:true, 
        id:true
      },
    });

    if (!comicinfo) {
      return null;
    }

   return comicinfo
  } catch (error: any) {
    throw new Error(error.message);
  }
}
