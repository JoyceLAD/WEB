import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import getFollowbyId from "../actions/getFollowListbyId";
import FollowList from "./Follow";

type Props = {};
const h1_style = {
  display: 'flex',
  margin: ' 30px 30px 20px 85px ',
  fontFamily: 'Dancing Script, cursive, Lobster, sans-serif, Arial',
  fontSize: '2rem',
  color: 'rgb(235, 84, 96)',
};
const FollowPage = async (props: Props) => {
  const currentUser = await getCurrentUser();
  const comic = await getFollowbyId();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please login" />
      </ClientOnly>
    );
  }

  if (comic.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No follow comic found"
          subtitle="Looks like you have follow listings."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <h1 style={h1_style}>Danh sách truyện đã theo dõi</h1>
      <FollowList comic={comic} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default FollowPage;
