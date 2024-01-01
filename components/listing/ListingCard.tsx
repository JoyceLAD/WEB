"use client";

import {  SafeUser, SafeComic } from "@/types";
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
  data: SafeComic;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
};


function ListingCard({
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
  let src1 = data.image
  if(!src1){
    src1 = "NULL"
  }
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      onClick={() => router.push(`/comic/${data.id}`)}
      className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl" >
          <Image
            fill
            className="object-cover h-full w-full group-hover:scale-110 transition"
            src={src1}
            alt="listing"
          />
          <div className="absolute top-3 right-3">
            <HeartButton comicId={data.id} currentUser={currentUser} />
          </div>
        </div>
        <div className="font-semibold text-lg" style={dhStyles}>
          {data.desc}
        </div>
        <div className="font-light text-neutral-500" style={dhStyles}>
          {data.title}
        </div>
        <div className="flex flex-row items-center gap-" >
          <div className="flex gap-1 font-semibold" style={dhStyles}>
          {<div className="font-light" >Số lượng chapter</div>}{data.NumberChapter} 
          </div>
        </div>
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>
    </motion.div>
  );
}

export default ListingCard;
