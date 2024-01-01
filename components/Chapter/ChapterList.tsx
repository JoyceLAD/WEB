import getCurrentUser from "@/app/actions/getCurrentUser"
import getListChapter from "@/app/actions/getListChapterOfComic"
import ChapterCard from "./ChapterCard";

interface ChapterListProps{
    comicId:string
}
export default async function ChapterList(params:ChapterListProps){
    const listing = await getListChapter(params)
    const currentUser =await getCurrentUser();

    if(listing.length === 0){
        return null
    }
    {listing.map((list) => {
        return (
          <ChapterCard
            key={list.id}
            data={list}
            currentUser={currentUser}
          />
        );
      })}
    
}