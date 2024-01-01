import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import React from "react";
import getCurrentUser from "../actions/getCurrentUser";
import getFollowbyId from "../actions/getFollowListbyId";
import HistoryList from "./history";

type Props = {};

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
        <EmptyState
          title="No follow comic found"
          subtitle="Looks like you have follow listings."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <HistoryList comic={comic} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default Historypage;
