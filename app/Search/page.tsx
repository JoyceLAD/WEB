
import ClientOnly from "@/components/ClientOnly";
import getSearchResult from "@/app/actions/getSearchResult";
import EmptyState from "@/components/EmptyState";
import ListComicClient from "@/components/ListComicClient";
import FollowList from "../Follow/Follow";
import getCurrentUser from "../actions/getCurrentUser";
import { NextApiRequest } from "next";
import ListingCard from "@/components/listing/ListingCard";
const h1_style = {
  display: 'flex',
  margin: ' 30px 30px 20px 85px ',
  fontFamily: 'Dancing Script, cursive, Lobster, sans-serif, Arial',
  fontSize: '2rem',
  color: 'rgb(235, 84, 96)',
};

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
          <h1 style={h1_style}>Kết quả tìm kiếm</h1>
        <div className="pl-20  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 overflow-x-hidden">
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
  