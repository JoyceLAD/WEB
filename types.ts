import { Comic, User } from "@prisma/client";

export type SafeComic = Omit<Comic, "createdAt"> & {
  createdAt: string;
};



export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
