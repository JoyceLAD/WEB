import getCurrentUser from "@/app/actions/getCurrentUser";
import getComicbyId from "@/app/actions/getComicbyId";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import ListComicClient from "@/components/ListComicClient";
import ListingHead from "@/components/listing/ListingHead";
import Container from "@/components/Container";
import ChapterCard from "@/components/Chapter/ChapterCard";
import getListChapter from "@/app/actions/getListChapterOfComic";

interface IParams {
  comicId?: string;
}
const h1_style = {
  display: 'flex',
  margin: ' 30px 30px 30px 90px ',
  padding: ' 30px 30px 30px 30px ',
  fontFamily: 'Dancing Script, cursive, Lobster, sans-serif, Arial',
  fontSize: '2rem',
  color: 'rgb(235, 84, 96)',
};
const ComicPage = async ({ params }: { params: IParams }) => {
  const comicInfo = await getComicbyId(params);
  const currentUser = await getCurrentUser();
  let chapterInfo = []
  if (!comicInfo) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }
  chapterInfo = await getListChapter(params)
  console.log(params)
  console.log(chapterInfo)
  let title1 = comicInfo.title
  let imgSrc1 = comicInfo.image
  let desc1 = comicInfo.desc

  if(!imgSrc1){
    imgSrc1 = "NULL"
  }
  if(!desc1){
    desc1 = "NULL"
  }

  if(!title1)
       title1 = "NULL"

console.log(chapterInfo)

  return (
    <ClientOnly>
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={title1}
            imageSrc={imgSrc1}
            desc = {desc1}
            id={comicInfo.id}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <div className="order-first mb-10 md:order-last md:col-span-3">
            </div>
          </div>
        </div>
      </div>
    
    </Container>
    <h1 style={h1_style}>
                        Danh sách các chương
                    </h1>
    <div style={h1_style}>
    {chapterInfo.map((list) => {
        return (
          <ChapterCard
            key={list.id}
            data={list}
            currentUser={currentUser}
          />
        
        );
      })}

    </div>
    </ClientOnly>
  
  );
};

export default ComicPage;
