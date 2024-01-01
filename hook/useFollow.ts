import { SafeUser } from "@/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-toastify";
import useLoginModel from "./useLoginModal";

type Props = {
  comicId: string;
  currentUser?: SafeUser | null;
};

function useFollow({ comicId, currentUser }: Props) {
  const router = useRouter();
  const loginModel = useLoginModel();

  const hasFollow = useMemo(() => {
    const list = currentUser?.followId || [];

    return list.includes(comicId);
  }, [currentUser, comicId]);

  const toggleFollow = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModel.onOpen();
      }

      try {
        let request;

        if (hasFollow) {
          request = () => axios.delete(`/api/follow/${comicId}`);
        } else {
          request = () => axios.post(`/api/follow/${comicId}`);
        }
        await request();
        router.refresh();
        toast.success("Success");
      } catch (error: any) {
        toast.error("Something Went Wrong");
      }
    },
    [currentUser, hasFollow, comicId, loginModel]
  );

  return {
    hasFollow,
    toggleFollow,
  };
}

export default useFollow;
