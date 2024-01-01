import { SafeComic } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import getCurrentUser from "./getCurrentUser";

export default async function getSearchResult(params:any) {
    try{

        const result = await prisma?.comic.findMany({
            where:{
                title:{
                    contains:params
                }
            }
        })
        const safeResult = result?.map((comic_result) =>({
            ...comic_result,
            createdAt: comic_result.createdAt.toString()
        }))
        return safeResult
    }catch(error:any){
        throw new Error(error)
    }
    
}