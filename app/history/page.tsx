import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import getFollowbyId from "../actions/getFollowListbyId";
import HistoryList from "./history";

type Props = {};
const h1_style = {
  display: 'flex',
  margin: ' 30px 30px 20px 85px ',
  fontFamily: 'Dancing Script, cursive, Lobster, sans-serif, Arial',
  fontSize: '2rem',
  color: 'rgb(235, 84, 96)',
};

const Historypage = async (props: Props) => {
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
              <h1 style={h1_style}>Lịch sử: </h1>

        <EmptyState
          title="No comic found in your history"        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <h1 style={h1_style}>Lịch sử </h1>
      <HistoryList comic={comic} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default Historypage;
