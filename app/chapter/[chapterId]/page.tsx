import getCurrentUser from "@/app/actions/getCurrentUser";
import getComicbyId from "@/app/actions/getComicbyId";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import ListingHead from "@/components/listing/ListingHead";
import Container from "@/components/Container";
import ChapterCard from "@/components/Chapter/ChapterCard";
import getListChapter from "@/app/actions/getListChapterOfComic";
import getChapterbyId from "@/app/actions/getChapterbyId";
import ListImageChapter from "@/components/listing/ListImageChapte";

interface IParams {
  chapterId?: string;
}

const ChapterPage = async ({ params }: { params: IParams }) => {
  const chapterInfo = await getChapterbyId(params);
  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
        <Container>
        <ListImageChapter
        key={chapterInfo?.id}
        data={chapterInfo}
        currentUser={currentUser}
          />

        </Container>
    </ClientOnly>
  
  );
};

export default ChapterPage;
