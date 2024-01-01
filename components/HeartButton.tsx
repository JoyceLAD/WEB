"use client";

import useFollow from "@/hook/useFollow";
import { SafeUser } from "@/types";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

type Props = {
  comicId: string;
  currentUser?: SafeUser | null;
};

function HeartButton({ comicId, currentUser }: Props) {
  const { hasFollow, toggleFollow } = useFollow({
    comicId,
    currentUser,
  });

  return (
    <div
      onClick={toggleFollow}
      className=" relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-white absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={hasFollow ? "fill-rose-500" : "fill-neutral-500/70"}
      />
    </div>
  );
}

export default HeartButton;
