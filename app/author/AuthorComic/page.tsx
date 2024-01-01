import ClientOnly from "@/components/ClientOnly";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import ListingCard from "@/components/listing/ListingCard";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getComicAuthor from "@/app/actions/getComicOfAuthor";
import { IParams } from "@/app/actions/getComicOfAuthor";
import ListAuthorComic from "@/components/listing/ListAuthorComic";
interface HomeProps {
  searchParams:IParams ;
}
const h1_style = {
  display: 'flex',
  margin: ' 30px 10px 10px ',
  fontFamily: 'Dancing Script, cursive, Lobster, sans-serif, Arial',
  fontSize: '2rem',
  color: 'rgb(235, 84, 96)',
};


export default async function Home({ searchParams }: HomeProps) {
  const listing = await getComicAuthor(searchParams);
  const currentUser = await getCurrentUser();

  console.log(listing)
  if (listing  == null) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
      <h1 style={h1_style}>
                        Danh sách truyện đã đăng
                    </h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 overflow-x-hidden">
          {listing.map((list) => {
            return (
              <ListAuthorComic
                key={list.id}
                data={list}
                currentUser={currentUser}
              />
            );
          })}
        </div>
      </Container>
      <Footer/>
    </ClientOnly>
  );
}
