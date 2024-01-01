
import ClientOnly from "@/components/ClientOnly";
import getSearchResult from "@/app/actions/getSearchResult";
import EmptyState from "@/components/EmptyState";
import ListComicClient from "@/components/ListComicClient";
import FollowList from "../Follow/Follow";
import getCurrentUser from "../actions/getCurrentUser";
import { NextApiRequest } from "next";
import ListingCard from "@/components/listing/ListingCard";

const SearchPage =async (req: NextApiRequest) => {
    const params = req.query
    const searchresult = await getSearchResult(params)
    const currentUser = await getCurrentUser()
    if(!searchresult){
        return(
            <ClientOnly>
                <EmptyState/>
            </ClientOnly>
        )
    }

    return(
        <ClientOnly>
        <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 overflow-x-hidden">
          {searchresult.map((list) => {
            return (
              <ListingCard
                key={list.id}
                data={list}
                currentUser={currentUser}
              />
            );
          })}
        </div>

        </ClientOnly>
    )
}
export default SearchPage
  