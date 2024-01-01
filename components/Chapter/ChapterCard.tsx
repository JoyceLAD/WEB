"use client";

import {  SafeUser, SafeComic, SafeChapter } from "@/types";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import Button from "../Button";
import HeartButton from "../HeartButton";

type Props = {
  data: SafeChapter;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
};

function ChapterCard({
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
  let name = data.name
  if(!name){
    name = "NULL"
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
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="font-light text-neutral-500">
          {data.name}
        </div>
        <div className="flex flex-row items-center gap-">
          <div className="flex gap-1 font-semibold">
          {<div className="font-light">Thời gian: </div>}{data.createdAt} 
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

export default ChapterCard;
