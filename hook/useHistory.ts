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

function useHistory({ comicId, currentUser }: Props) {
  const router = useRouter();
  const loginModel = useLoginModel();

  const hasClick = useMemo(() => {
    const list = currentUser?.history || [];

    return list.includes(comicId);
  }, [currentUser, comicId]);

  const toggleFollow = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModel.onOpen();
      }

      try {
        if (hasClick) {
            await axios.post(`/api/history/${comicId}`);
        }
        router.refresh();
        toast.success("Success");
      } catch (error: any) {
        toast.error("Something Went Wrong");
      }
    },
    [currentUser, hasClick, comicId, loginModel]
  );

  return {
    hasClick,
    toggleFollow,
  };
}

export default useHistory;
