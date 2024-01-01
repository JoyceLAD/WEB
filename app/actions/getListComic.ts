import prisma from '@/lib/prismadb'
import { create } from 'domain'

export interface IdComicList{
    userid?:string
}
export default async function getListComic(params:IdComicList) {
    try{
        const 
           { userid}
         = params;
    
    let query : any = {};
    if(userid){
        query.userid = userid
    }
    const ListComic = await prisma.comic.findMany({
        where:query,
        orderBy:{
            createdAt:"desc"
        }
    })
    const safeListings = ListComic.map((list) => ({
        ...list,
        createdAt: list.createdAt.toISOString(),
      }));
      return safeListings
} catch(error:any){
    throw  Error(`Error occurred: ${error.message}`);
}
}