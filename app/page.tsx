import ClientOnly from "@/components/ClientOnly";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import ListingCard from "@/components/listing/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";
import getListComic, { IdComicList } from "./actions/getListComic";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

interface HomeProps {
  searchParams: IdComicList;
}

export default async function Home({ searchParams }: HomeProps) {
  const listing = await getListComic(searchParams);
  const currentUser = await getCurrentUser();

  console.log(listing)
  if (listing.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      
      <Container>
      <Banner/>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 overflow-x-hidden">
          {listing.map((list) => {
            return (
              <ListingCard
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
