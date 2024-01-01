import prisma from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getHistory() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const HistoryData = await prisma.user.findUnique({
      where: {
        id: currentUser.id,
      },
      select: {
        history: true,
      },
    });

    const HistoryIdData = HistoryData?.history || [];
    const Comic = []
    for (const comicId of HistoryIdData) {
      const comic = await prisma.comic.findUnique({
        where: {
          id: comicId,
        },

      });
      if(comic){
        Comic.push(comic)
      }
          }
    const safecoCmiclist = Comic.map((c) =>({
        ...c,
        createdAt: c.createdAt.toString(),
    }))
    return safecoCmiclist;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
