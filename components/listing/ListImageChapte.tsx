"use client";

import {  SafeUser, SafeComic, SafeChapter } from "@/types";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import Button from "../Button";
import HeartButton from "../HeartButton";
const dhStyles = {
  color:'white'
};

type Props = {
  data: SafeChapter;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
};


function ListImageChapter({
  data,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}: Props) {
  const router = useRouter();
  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) return;

      onAction?.(actionId);
    },
    [onAction, actionId, disabled]
  );
  let src1 = data.imageurl
  if(!src1){
    src1 = "NULL"
  }
  return (
    <div
      className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl" >
          <Image
            fill
            className="object-cover h-full w-full"
            src={src1}
            alt="listing"
          />
        </div>
      </div>
    </div>
  );
}

export default ListImageChapter;
