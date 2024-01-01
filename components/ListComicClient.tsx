"use client";

import useLoginModel from "@/hook/useLoginModal";
import {  SafeUser, SafeComic } from "@/types";
import axios from "axios";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import { useRouter } from "next/navigation";
import Container from "./Container";
import ListingHead from "./listing/ListingHead";

type Props = {
  currentUser?: SafeUser | null;
};
type comicInfoProp = {
    title: any,
    desc:any,
    NumberChapter:any,
    image:any,
    chapters:any,
    authorId:any,
    createdAt:any,
    updatedAt:any,
    id:any
}
function ListComicClient({ currentUser }: Props, comicInfo : comicInfoProp) {
  const router = useRouter();

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
  );
}

export default ListComicClient;
