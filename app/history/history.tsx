import Container from "@/components/Container";
import Heading from "@/components/Heading";
import ListingCard from "@/components/listing/ListingCard";
import { SafeUser, SafeComic } from "@/types";

type Props = {
  comic: SafeComic[];
  currentUser?: SafeUser | null;
};

function HistoryList({ comic, currentUser }: Props) {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you favorites!" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
        {comic.map((comicitem) => (
          <ListingCard
            currentUser={currentUser}
            key={comicitem.id}
            data={comicitem}
          />
        ))}
      </div>
    </Container>
  );
}

export default HistoryList;
