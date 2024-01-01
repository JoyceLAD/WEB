import prisma from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getFollowbyId() {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const followData = await prisma.user.findUnique({
      where: {
        id: currentUser.id,
      },
      select: {
        followId: true,
      },
    });

    const followIdArray = followData?.followId || [];
    const Comic = []
    for (const comicId of followIdArray) {
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
