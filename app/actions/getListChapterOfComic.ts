import prisma from '@/lib/prismadb'
import { create } from 'domain'

export interface IdChapterList{
    comicId?:string
}
export default async function getListChapter(params:IdChapterList) {
    try{
        const 
           { comicId}
         = params;
    const ListComic = await prisma.chapter.findMany({
        where:{
            comicId:comicId
        },
        orderBy:{
            createdAt:"desc"
        }
    })
    console.log(ListComic)
    const safeListings = ListComic.map((list) => ({
        ...list,
        createdAt: list.createdAt.toISOString(),
      }));
      return safeListings
} catch(error:any){
    throw  Error(`Error occurred: ${error.message}`);
}
}