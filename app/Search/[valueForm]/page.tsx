
import ClientOnly from "@/components/ClientOnly";
import getSearchResult from "@/app/actions/getSearchResult";
import EmptyState from "@/components/EmptyState";
import ListComicClient from "@/components/ListComicClient";
import FollowList from "../../Follow/Follow";
import getCurrentUser from "../../actions/getCurrentUser";

interface IParams{
    keyword?:string
}
const SearchPage =async ({ params }: { params: IParams }) => {
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
            <FollowList comic={searchresult} currentUser={currentUser}/>
        </ClientOnly>
    )
}
export default SearchPage
  