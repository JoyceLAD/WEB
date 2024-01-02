import prisma from "@/lib/prismadb";

interface IParams {
  chapterId?: string;
}

export default async function getChapterbyId(params: IParams) {
  try {
    const { chapterId } = params;

    const comicChapter = await prisma.chapter.findUnique({
      where: {
        id: chapterId,
      },
    });

    if (!comicChapter) {
      return null;
    }

    let {
        id,
        imageurl,
        name, comicId, createdAt, updatedAt
    } = comicChapter

   let updatedAt1 = updatedAt.toString()
   



      return {id, imageurl, name, comicId, createdAt, updatedAt1}

  } catch (error: any) {
    throw new Error(error.message);
  }
}
