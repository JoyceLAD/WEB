import getCurrentUser from "@/app/actions/getCurrentUser";
import getComicbyId from "@/app/actions/getComicbyId";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import ListComicClient from "@/components/ListComicClient";
import ListingHead from "@/components/listing/ListingHead";
import Container from "@/components/Container";
interface IParams {
  comicId?: string;
}

const ComicPage = async ({ params }: { params: IParams }) => {
  const comicInfo = await getComicbyId(params);
  const currentUser = await getCurrentUser();
  if (!comicInfo) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }
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
    <h1 style={{
 
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh'
}}>
  {title1}
</h1>

    </ClientOnly>
  );
};

export default ComicPage;
